import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"
import { IoNotificationsCircleSharp } from "react-icons/io5"

const notification = () => {
    return (
        <> 
        <div className='h-36 p-6 bg-secret-blue '>
            <Link href='#' className="flex justify-start xl:px-72 md:px-32 gap-2 items-center mb-8">
                <FaArrowLeft />
                 <h1 className='font-bold'>Kembali Ke Beranda</h1>
            </Link> 
            <div className="flex justify-center items-center ">
            <div className="card bg-white w-auto h-auto rounded-xl border border-secret-pink">
                <h1 className='flex justify-center font-bold px-5 py-5 bg-secret-pink rounded-t-xl'>Notification</h1>
                <div className="flex flex-row justify-start xl:px-14 px-5 gap-5 my-5">
                    <IoNotificationsCircleSharp className="text-4xl w-7 h-7" />
                    <div className="w-full">
                        <div className="flex justify-between">
                            <h1 className="font-bold text-blue-700">Promosi</h1>
                            <div className="flex justify-center items-center">
                                <h1 className=" text-neutral-400 text-xs">2 Desember, 12:00</h1>
                                <div className="ml-2 w-3 h-3 rounded-full bg-secret-green">
                                </div>
                            </div>
                        </div>
                        <h2 className="font-bold text-xs">Dapatkan Potongan 50% Selama Bulan Desember!</h2>
                        <h3 className="font-bold text-xs text-neutral-400">Syarat dan ketentuan berlaku!</h3>
                    </div>
                </div>

                <div className="flex flex-row justify-start xl:px-14 px-5 gap-5 my-5">
                    <IoNotificationsCircleSharp className="text-4xl w-7 h-7" />
                    <div className="w-full">
                        <div className="flex justify-between">
                            <h1 className="font-bold text-blue-700">Notifikasi</h1>
                        <div className="flex justify-center items-center">
                            <h1 className=" text-neutral-400 text-xs">1 Desember, 10:00</h1>
                            <div className="ml-2 w-3 h-3 rounded-full bg-secret-red">
                            </div>
                        </div>
                    </div>
                        <h2 className="font-bold text-xs">Password berhasil diubah</h2>
                    </div>
                </div>
                <div className="flex flex-row justify-start xl:px-14 px-5 gap-5 my-5">
                    <IoNotificationsCircleSharp className="text-4xl w-7 h-7" />
                    <div className="w-full">
                        <div className="flex justify-between">
                            <h1 className="font-bold text-blue-700">Promosi</h1>
                        <div className="flex justify-center items-center">
                            <h1 className=" text-neutral-400 text-xs">2 Desember, 11:00</h1>
                        <div className="ml-2 w-3 h-3 rounded-full bg-secret-green">
                        </div>
                        </div>
                    </div>
                        <h2 className="font-bold text-xs">Dapatkan Potongan 50% Selama Bulan Desember!</h2>
                        <h3 className="font-bold text-xs text-neutral-400">Syarat dan ketentuan berlaku!</h3>
                    </div>
                </div>
            </div>
            
        </div>
             
        </div>
        
        </>
    )
}
export default notification