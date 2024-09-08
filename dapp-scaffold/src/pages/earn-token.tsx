import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Transaction, SystemProgram, Keypair } from '@solana/web3.js';
import { useState, useEffect } from 'react';

const EarnToken = () => {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [airdropStatus, setAirdropStatus] = useState<string | null>(null);
  const [transactionStatus, setTransactionStatus] = useState<string | null>(null);
  const [solConversion, setSolConversion] = useState<string | null>(null);
  const [solBalance, setSolBalance] = useState<number | null>(null);
  const [userPoints, setUserPoints] = useState<number>(200000); // Kullanıcının mevcut puanı

  const pointsPerBottle = 5;
  const tlPerFivePoints = 0.25;
  const solValueInTL = 4340;

  useEffect(() => {
    const getBalance = async () => {
      if (publicKey) {
        const balance = await connection.getBalance(publicKey);
        const sol = balance / 1e9; // Lamports to SOL
        setSolBalance(sol);
      }
    };
    getBalance();
  }, [publicKey, connection]);

  const convertPointsToSol = () => {
    const totalTL = (userPoints / pointsPerBottle) * tlPerFivePoints;
    const solAmount = totalTL / solValueInTL;
    setSolConversion(`Puanların SOL karşılığı: ${solAmount.toFixed(4)} SOL`);
  };

  const handleAirdrop = async () => {
    if (!publicKey) {
      setAirdropStatus('Cüzdan bağlı değil.');
      return;
    }

    try {
      setAirdropStatus('Airdrop işlemi başlatıldı...');
      setTimeout(async () => {
        const airdropSignature = await connection.requestAirdrop(publicKey, 2e9); // 2 SOL
        await connection.confirmTransaction(airdropSignature, 'confirmed');
        setAirdropStatus('Airdrop başarıyla tamamlandı: 2 SOL eklendi.');
      }, 1000);
    } catch (error) {
      setAirdropStatus('Airdrop işlemi başarısız oldu.');
    }
  };

  const handleTransaction = async () => {
    if (!publicKey) {
      setTransactionStatus('Cüzdan bağlı değil.');
      return;
    }

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: Keypair.generate().publicKey, // Test için yeni bir hesaba gönderim
        lamports: 1000000, // 0.001 SOL
      })
    );

    try {
      setTransactionStatus('İşlem başlatılıyor...');
      const signature = await sendTransaction(transaction, connection);
      const latestBlockhash = await connection.getLatestBlockhash();
      await connection.confirmTransaction({
        signature: signature,
        blockhash: latestBlockhash.blockhash,
        lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
      });
      setTransactionStatus(`İşlem başarıyla tamamlandı: ${signature}`);
    } catch (error) {
      setTransactionStatus('İşlem başarısız oldu.');
    }
  };

  return (
    <div className='w-full flex flex-col gap-4'>
      <h1 className='m-auto'>Token Kazan</h1>
      <button onClick={handleAirdrop} className="btn btn-primary">
        2 SOL Al (Airdrop)
      </button>
      {airdropStatus && <p>{airdropStatus}</p>}

      <button onClick={handleTransaction} className="btn btn-primary">
        Token Kazan ve Transfer Et
      </button>
      {transactionStatus && <p>{transactionStatus}</p>}

      <button onClick={convertPointsToSol} className="btn btn-primary">
        Puanları SOL'a Çevir
      </button>
      {solConversion && <p>{solConversion}</p>}

      <p className='m-auto'>Güncel Puan: {userPoints}</p> {/* Güncel puanı göster */}
      
     
    </div>
  );
};

export default EarnToken;
