import { useState } from "react";
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
  const [active, setActive] = useState(0);
  const chapterIndex = index;
  return (
    <div key={index}>
      <div className="flex items-center justify-between mb-2 text-sm font-bold">
        <h4 className="text-secret-darkblue">
          Chapter {index + 1} - {name}
        </h4>
        <span className="text-secret-darkblue">{time} Menit</span>
      </div>

      <div className="mb-4 divide-y-2 divide-zinc-100">
        {modules.map((section, index) => (
          <Module
            key={index}
            name = {section.name}
            title={section.title}
            link={section.courseLink}
            index={index}
            handleVideo={handleVideo}
            isPremium={isPremium}
            chapterIndex={chapterIndex}
            handleModal={handleModal}
            isPaid={isPaid}
          />
        ))}
      </div>
    </div>
  );
}
