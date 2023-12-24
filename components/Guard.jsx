import { BiBrain } from "react-icons/bi";

export default function Guard(){
    return (
        <div className="bg-secret-pink flex items-center justify-center min-h-screen min-w-full z-30 absolute top-0">
        <BiBrain className="text-9xl text-white" />
        <div className="flex">
          <h1 className="text-7xl text-secret-text flex items-center font-bold">
            Skill
          </h1>
          <h1 className="text-7xl text-secret-text font-bold rounded-xl">
            HUB
          </h1>
        </div>
      </div>
    )
}