import { Transaction, SystemProgram } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { connection } from '../utils/solanaConnection';

const SendTransactionButton = () => {
  const { publicKey, sendTransaction } = useWallet();

  const handleTransaction = async () => {
    console.log(12);

    if (!publicKey) {
      console.error('Cüzdan bağlı değil');
      alert('Cüzdan bağlı değil');
      return;
    }

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: publicKey, // Test amaçlı kendi cüzdanınıza gönderme
        lamports: 1000000, // 0.001 SOL
      })
    );

    try {
        
      const signature = await sendTransaction(transaction, connection);
      const latestBlockhash = await connection.getLatestBlockhash();
      
      // Yeni doğrulama metodu
      await connection.confirmTransaction({
        signature,
        blockhash: latestBlockhash.blockhash,
        lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
      });

      console.log(`İşlem Tamamlandı: ${signature}`);
    } catch (error) {
      console.error('Transaction failed', error);
    }
  };

  return (
    <button onClick={handleTransaction} className="btn btn-primary">
      İşlem Yap
    </button>
  );
};

export default SendTransactionButton;
