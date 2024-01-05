import HistoryCard from "./PaymentHistoryCard";
import { usePaymentHistory } from "@/app/utils/hooks/usePaymentHistory";
import ClassCardLoading from "../ClassCardLoading";

const mockArray = [1,2,3];

export default function RiwayatPembayaran() {
  const token = localStorage.getItem("token");
  const { data, isLoading, error } = usePaymentHistory(token);
  if(!data && !isLoading){
    return (
    <div className="bg-secret-red rounded-xl text-lg text-center font-bold text-white mt-5">There Is No Payment Data</div>
    
    )
  }

  return (
    <div className="grid min-h-full gap-5  w-full p-1 lg:px-12 pt-2">
      {isLoading? mockArray.map((item, index) => <ClassCardLoading key={index} />) : !data?.length ? <h1 className="m-auto bg-secret-red font-bold text-xl text-white px-2 rounded-lg">Tidak Ada Riwayat Pembayaran</h1> : data?.map((item, index) => <HistoryCard key={index} data={item} />)}
    </div>
  );
}
