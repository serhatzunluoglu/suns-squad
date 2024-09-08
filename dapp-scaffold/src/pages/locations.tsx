import { FC } from "react";

const Locations: FC = () => {
  const locations = [
    { id: 1, name: "Otomat 1", distance: "500 metre uzaklıkta" },
    { id: 2, name: "Otomat 2", distance: "1 kilometre uzaklıkta" },
    { id: 3, name: "Otomat 3", distance: "2 kilometre uzaklıkta" },
  ];

  return (
    <div className="flex flex-col items-center h-screen bg-yellow-100 p-4">
      {/* En Yakın Otomatlar Başlığı */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-black">En Yakın Otomatlar</h1>
        <p className="text-lg mt-4 text-gray-700">
          Size en yakın otomatları aşağıda görebilirsiniz.
        </p>
      </div>

      {/* Otomat Listesi */}
      <div className="mt-6 w-full max-w-md bg-white p-4 rounded-lg shadow text-center">
        <ul>
          {locations.map((location) => (
            <li key={location.id} className="border-b py-2">
              <p className="text-black">
                {location.name} - {location.distance}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Locations;
