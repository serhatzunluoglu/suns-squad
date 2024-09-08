import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const WalletConnect = () => {
  const { publicKey } = useWallet();

  return (
    <div>
      {publicKey ? (
        <p>Cüzdan Bağlı: {publicKey.toBase58()}</p>
      ) : (
        <WalletMultiButton />
      )}
    </div>
  );
};

export default WalletConnect;
