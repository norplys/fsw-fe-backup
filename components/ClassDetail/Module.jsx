
import { BiPlay } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
export default function Module({
  title,
  index,
  handleVideo,
  isPremium,
  chapterIndex,
  handleModal,
  isPaid,
  uuid,
  isCompleted,
  userChapterModuleUuid,
}) {
  return (
    <div className="flex items-center justify-between py-2 md:py-3" key={index}>
      <div className="flex items-center w-4/5 space-x-2">
        <div className="relative flex-shrink-0 w-10 h-10 rounded-full bg-check-fill">
          <span className="absolute text-xs text-black font-bold transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            {index + 1}
          </span>
        </div>
        <p className="text-xs md:text-sm text-zinc-500">{title}</p>
      </div>
        {isPremium && chapterIndex  !== 0 && !isPaid ? (
          <button
            className="flex text-xs font-bold bg-secret-pink rounded-full p-2 "
            onClick={handleModal
            }
          >
            <FaLock className="text-white text-xs md:text-lg" />
          </button>
        ) : (
          <button
            className={`text-xs font-bold rounded-full p-2 ${isCompleted ? 'bg-secret-green' : 'bg-secret-darkblue'} `}
            onClick={() =>
              handleVideo(
                uuid,
                chapterIndex,
                index,
                userChapterModuleUuid
              )
            }
          >
            <BiPlay className="text-white text-xs md:text-lg"/>
          </button>
        )}
    </div>
  );
}
