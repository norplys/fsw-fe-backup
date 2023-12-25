import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"
import { IoNotificationsCircleSharp } from "react-icons/io5"
import NotificationCard from "@/components/Auth/NotificationCard"


const mockNotification = new Array(10).fill(true)

const notification = () => {
    return (
        <> 
        <div className='h-auto md:h-36 p-6 bg-secret-blue'>
            <Link href='/' className="flex justify-start md:px-8 gap-6 mb-8 text-xl items-center">
                <FaArrowLeft />
                 <h1 className='font-bold'>Kembali Ke Beranda</h1>
            </Link> 
            <div className="flex justify-center items-center ">
            <div className="card bg-white w-full md:w-3/4 lg:w-3/6 xl:w-2/4 h-fit  rounded-xl border border-secret-pink">
                <h1 className='flex justify-center font-bold px-5 py-5 bg-secret-pink rounded-t-xl'>Notification</h1>
                <div className="overflow-y-scroll h-full max-h-80">
                {
                    mockNotification.map((_, idx) => (
                        <NotificationCard key={idx} />
                    ))
                }
                </div>
            </div>
            
        </div>
             
        </div>
        
        </>
    )
}
export default notification