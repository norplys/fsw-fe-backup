import { useState } from "react";
import { BiPlay } from "react-icons/bi";
import Module from "./Module";

export default function Chapter({name, time, modules, index}) {
    const [active, setActive] = useState(0);
  return (
    <div key={index}>
      <div className="flex items-center justify-between mb-2 text-sm font-bold">
        <h4 className="text-darkblue-500">
          Chapter {index + 1}
        </h4>
        <span className="text-blue-500">{time} Menit</span>
      </div>

      <div className="mb-4 divide-y-2 divide-zinc-100">
        {modules.map((section, index) => (
          <Module
            key={index}
            title={section.title}
            link={section.link}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
