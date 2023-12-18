import { VscLoading } from "react-icons/vsc";
export default function ClassDetailLoading() {
    return (
        <div className="min-w-full min-h-screen bg-white flex justify-center items-center">
            <VscLoading className="text-9xl text-secret-pink animate-spin" />
        </div>

    )
}