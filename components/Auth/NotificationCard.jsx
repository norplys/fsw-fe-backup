import { IoNotificationsCircleSharp } from "react-icons/io5";

export default function NotificationCard(){
    return (
        <div className="flex flex-col md:flex-row justify-start px-5 md:px-14 gap-5 my-5">
                    <IoNotificationsCircleSharp className="text-4xl w-7 h-7 animate-pulse" />
                    <div className="w-full">
                        <div className="flex justify-between">
                            <h1 className="font-bold text-blue-700">Promosi</h1>
                            <div className="flex justify-center items-center">
                                <h1 className=" text-neutral-400 text-xs">2 Desember, 12:00</h1>
                            </div>
                        </div>
                        <h2 className="font-bold text-xs">Dapatkan Potongan 50% Selama Bulan Desember!</h2>
                        <h3 className="font-bold text-xs text-neutral-400">Syarat dan ketentuan berlaku!</h3>
                    </div>
        </div>
    )
}