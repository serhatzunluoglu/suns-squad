import { FC } from "react";

const Transactions: FC = () => {
  const transactions = [
    { id: 1, date: "2024-09-01", amount: "10 Token", status: "Başarılı" },
    { id: 2, date: "2024-08-28", amount: "5 Token", status: "Başarılı" },
    { id: 3, date: "2024-08-25", amount: "2 Token", status: "Başarısız" },
  ];

  return (
    <div className="flex flex-col items-center h-screen bg-blue-100 p-4">
      {/* İşlemlerim Başlığı */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-black">İşlemlerim</h1>
        <p className="text-lg mt-4 text-gray-700">
          Geçmiş işlemlerinizi aşağıda görebilirsiniz.
        </p>
      </div>

      {/* İşlem Geçmişi */}
      <div className="mt-6 w-full max-w-md bg-white p-4 rounded-lg shadow text-center">
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id} className="border-b py-2">
              <p className="text-black">
                {transaction.date} - {transaction.amount} - {transaction.status}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Transactions;
