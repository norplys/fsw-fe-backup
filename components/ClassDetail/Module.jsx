import { BiPlay } from "react-icons/bi"
export default function Module ({title, link, index, handleVideo}) {
    return (
        <div
            className="flex items-center justify-between py-3"
            key={index}
          >
            <div className="flex items-center w-4/5 space-x-2">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-full bg-check-fill">
                <span className="absolute text-xs text-black font-bold transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  {index + 1}
                </span>
              </div>
              <p className="text-sm text-zinc-500">{title}</p>
            </div>
            <div
              className={`relative flex-shrink-0 w-8 h-8 rounded-full ${title ? "bg-green-500" : "bg-darkblue-500"}`}
            >
              <button className="absolute text-xs font-bold transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" onClick={() => handleVideo("https://www.youtube.com/embed/ixOd42SEUF0?si=Md60vtjvCtYoZwrS")}>
                <BiPlay className="text-white text-lg"/>
              </button>
            </div>
          </div>
        
    )
}
