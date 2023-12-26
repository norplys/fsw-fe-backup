import HistoryCard from "./PaymentHistoryCard";
import { usePaymentHistory } from "@/app/utils/hooks/usePaymentHistory";
import ClassCardLoading from "../ClassCardLoading";
import { useEffect, useState } from "react";

const mockArray = [1,2,3];

export default function RiwayatPembayaran() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);
  const [token , setToken] = useState(null);
  let { data, isLoading, error } = usePaymentHistory(token);

  if(!data && !isLoading){
    return (
    <div className="bg-secret-red rounded-xl text-lg text-center font-bold text-white mt-5">There Is No Payment Data</div>
    
    )
  }

  return (
    <div className="flex flex-col min-h-full course md:max-w-full md:h-[250px] rounded-[15px] duration-300 shadow-xl gap-5 pt-2 pr-3">
      {isLoading? mockArray.map((item, index) => <ClassCardLoading key={index} />) : data?.map((item, index) => <HistoryCard key={index} data={item} />)}
    </div>
  );
}
