import { BiBrain } from "react-icons/bi";

export default function Guard(){
    return (
        <div className="bg-secret-pink flex items-center justify-center min-h-screen min-w-full z-30 absolute top-0">
        <BiBrain className=" text-5xl lg:text-9xl text-white" />
        <div className="flex">
          <h1 className="text-4xl lg:text-7xl text-secret-text flex items-center font-bold">
            SkillHUB
          </h1>
        </div>
      </div>
    )
}