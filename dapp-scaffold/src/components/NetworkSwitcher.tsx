import { FC } from 'react';
import dynamic from 'next/dynamic';
import { useNetworkConfiguration } from '../contexts/NetworkConfigurationProvider';

const NetworkSwitcher: FC = () => {
  const { networkConfiguration, setNetworkConfiguration } = useNetworkConfiguration();

  console.log(networkConfiguration);
  return (
    <label className="cursor-pointer label">
      <a>Network</a>
      <select             
  value={networkConfiguration}
  onChange={(e) => {
    const selectedNetwork = e.target.value;
    setNetworkConfiguration(selectedNetwork);

    if (selectedNetwork === 'mainnet-beta') {
      alert('Mainnet kullanılamaz. Devnet seçildi.');
      setNetworkConfiguration('devnet'); // Default olarak devnet'e geç
    }
  }}
  className="select max-w-xs"
>
  <option value="mainnet-beta">Mainnet</option>
  <option value="devnet">Devnet</option>
  <option value="testnet">Testnet</option>
</select>
    </label>
  );
};

export default dynamic(() => Promise.resolve(NetworkSwitcher), {
  ssr: false
})