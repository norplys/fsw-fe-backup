import { VscLoading } from "react-icons/vsc";
export default function FilterLoading() {
    return (
        <div className="grid gap-3 h-6 flex-1 rounded-xl mb-4">
        <div className=" row-span-4  rounded-lg bg-secret-background flex justify-center items-center ">
            <VscLoading className="text-secret-pink text-5xl font-extrabold animate-spin m-auto"/>
        </div>
        </div>
    );
}