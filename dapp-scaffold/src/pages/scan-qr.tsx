import { FC } from "react";

const ScanQR: FC = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-purple-100 p-4">
      {/* QR Kodu Oku Başlığı */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-black">QR Kodu Oku</h1>
        <p className="text-lg mt-4 text-gray-700">
          QR kodu tarama işlemi burada olacak.
        </p>
        <img src="https://media.istockphoto.com/id/1226328537/vector/image-place-holder-with-a-gray-camera-icon.jpg?s=612x612&w=0&k=20&c=qRydgCNlE44OUSSoz5XadsH7WCkU59-l-dwrvZzhXsI=" alt="" />
      </div>
    </div>
  );
};

export default ScanQR;
