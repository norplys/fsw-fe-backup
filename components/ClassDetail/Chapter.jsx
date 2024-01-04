import Module from "./Module";

export default function Chapter({
  name,
  time,
  modules,
  index,
  handleVideo,
  isPremium,
  handleModal,
  isPaid,
}) {
  const chapterIndex = index;
  return (
    <div key={index}>
      <div className="flex items-center justify-between mb-2 text-xs md:text-sm font-bold">
        <h4 className="text-secret-darkblue lg:max-w-xs">
          Chapter {index + 1} - {name}
        </h4>
        <span className="text-secret-darkblue px-1">{time} Menit</span>
      </div>

      <div className="mb-4 divide-y-2 divide-zinc-100">
        {modules.map((section, index) => (
          <Module
            key={index}
            name = {section.name}
            title={section.title}
            uuid= {section.chapterModuleUuid}
            index={index}
            handleVideo={handleVideo}
            isPremium={isPremium}
            chapterIndex={chapterIndex}
            handleModal={handleModal}
            isPaid={isPaid}
            isCompleted={section.isCompleted}
            userChapterModuleUuid={section.userChapterModuleUuid}
          />
        ))}
      </div>
    </div>
  );
}
