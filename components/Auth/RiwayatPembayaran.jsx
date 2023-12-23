import HistoryCard from "./PaymentHistoryCard";

export default function RiwayatPembayaran() {
  return (
    <div className="flex flex-col course md:max-w-full h-[300px] md:h-[250px] bg-secret-background rounded-[15px] duration-300 shadow-xl hover:scale-105 hover:shadow-2xl">
      <HistoryCard />
    </div>
  );
}
