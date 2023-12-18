import { VscLoading } from "react-icons/vsc";
export default function ClassDetailLoading() {
    return (
        <div className="min-w-full min-h-screen bg-secret-blue flex justify-center items-center">
            <VscLoading className="text-9xl text-secret-darkblue animate-spin" />
        </div>

    )
}