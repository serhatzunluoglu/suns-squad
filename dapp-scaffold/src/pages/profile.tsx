import { FC } from "react";
import Link from 'next/link'; // Link bileşenini ekledim
import { HomeIcon } from '@heroicons/react/outline'; // Home iconunu import ettik


const Profile: FC = () => {
  const navigationStarts = () => {
    console.log('Navigasyon başlıyor'); // Burada bir işlem yapabilirsiniz
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 p-4">
      {/* Profil Bilgisi */}
      <div className="bg-green-300 p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <div>
          <h2 className="text-sm font-bold text-black">Serhat İsmail Zunluoğlu</h2>
          <p className="text-3xl font-semibold text-black">480 Puan</p>
          <p className="text-md mt-2 text-gray-500">Email: serhat@example.com</p>
          <p className="text-md mt-1 text-gray-500">Telefon: +90 555 555 55 55</p>
        </div>
      </div>

      {/* Profil Ayarları */}
      <div className="mt-6 w-full max-w-md bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-black mb-4">Profil Ayarları</h3>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Ayarları Düzenle</button>
      </div>

      {/* Anasayfaya Dön Butonu */}
      <div className="mt-6">
        <Link
          href="/"
          scroll={true}
          passHref
          className="group flex h-full flex-col items-center justify-between"
          onClick={navigationStarts}
        >
          <div className="flex flex-row items-center gap-3">
            <HomeIcon className="w-6 h-6 text-blue-500" />
            <p className="text-blue-500 font-semibold">Anasayfaya Dön</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
