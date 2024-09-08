import { FC } from "react";
import Link from "next/link";

const Home: FC = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-green-100 p-4">
      <div className="bg-green-300 p-4 rounded-lg shadow-md w-full max-w-sm flex items-center">
        <img
          className="w-24 h-24 rounded-full mr-4"
          src={`https://ui-avatars.com/api/?name=Serhat+İsmail+Zunluoğlu`}
          alt="Profile"
        />
        <div>
          <h2 className="text-sm font-bold text-black">Serhat İsmail Zunluoğlu</h2>
          <p className="text-3xl font-semibold text-black">480 Puan</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
  <Link href="/profile" legacyBehavior>
    <a className="bg-green-300 p-4 rounded-lg shadow text-center text-black flex flex-col items-center">
      <i className="fas fa-user mb-2"></i>
      <span>Profilim</span>
    </a>
  </Link>
  <Link href="/earn-token" legacyBehavior>
    <a className="bg-green-300 p-4 rounded-lg shadow text-center text-black flex flex-col items-center">
      <i className="fas fa-coins mb-2"></i>
      <span>Token Kazan</span>
    </a>
  </Link>
  <Link href="/report-issue" legacyBehavior>
    <a className="bg-green-300 p-4 rounded-lg shadow text-center text-black flex flex-col items-center">
      <i className="fas fa-exclamation-circle mb-2"></i>
      <span>Sorun Bildir</span>
    </a>
  </Link>
  <Link href="/transactions" legacyBehavior>
    <a className="bg-green-300 p-4 rounded-lg shadow text-center text-black flex flex-col items-center">
      <i className="fas fa-receipt mb-2"></i>
      <span>İşlemlerim</span>
    </a>
  </Link>
  <Link href="/locations" legacyBehavior>
    <a className="bg-green-300 p-4 rounded-lg shadow text-center text-black flex flex-col items-center">
      <i className="fas fa-map-marker-alt mb-2"></i>
      <span>En Yakın Otomatlar</span>
    </a>
  </Link>
  <Link href="/scan-qr" legacyBehavior>
    <a className="bg-green-300 p-4 rounded-lg shadow text-center text-black flex flex-col items-center">
      <i className="fas fa-qrcode mb-2"></i>
      <span>QR Kodu Oku</span>
    </a>
  </Link>
</div>


    </div>
  );
};

export default Home;
