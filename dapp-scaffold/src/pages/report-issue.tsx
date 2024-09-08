import { FC, useState } from "react";

const ReportIssue: FC = () => {
  const [issue, setIssue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Sorun bildirildi: ${issue}`);
  };

  return (
    <div className="flex flex-col items-center h-screen bg-red-100 p-4">
      {/* Sorun Bildir Başlığı */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-black">Sorun Bildir</h1>
        <p className="text-lg mt-4 text-gray-700">
          Yaşadığınız sorunu aşağıdaki alana girerek bize iletebilirsiniz.
        </p>
      </div>

      {/* Sorun Bildirme Formu */}
      <div className="mt-6 w-full max-w-md bg-white p-4 rounded-lg shadow text-center">
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Sorunuzu buraya yazın..."
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4">
            Sorunu Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportIssue;
