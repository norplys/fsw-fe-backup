import { IoNotificationsCircleSharp } from "react-icons/io5";

export default function NotificationCard({data}){
const date = new Date(data?.createdAt)
const FormattedDate = new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(date);

    return (
        <div className="flex flex-col md:flex-row justify-start px-5 md:px-14 gap-5 my-7">
                    <IoNotificationsCircleSharp className="md:text-2xl text-xl animate-pulse" />
                    <div className="w-full">
                        <div className="flex justify-between">
                            <h1 className="font-extrabold text-secret-darkblue text-sm md:text-base">{data?.title}</h1>
                            <div className="flex justify-center items-center">
                                <h1 className=" text-neutral-400 text-xs">{FormattedDate}</h1>
                            </div>
                        </div>
                        <h2 className="font-bold text-xs">{data?.notification}</h2>
                        {data?.is_conditional  ? <h3 className="font-bold text-xs text-neutral-400">Syarat dan ketentuan berlaku!</h3> : ''}
                    </div>
        </div>
    )
}