import { useState } from "react";

export default function ClassButton({text}) {
    const [isActive, setIsActive] = useState(false);
    function changeActive () {
        setIsActive(!isActive);
    }
    return (
        <button
              className={`rounded-full py-3 px-6
                            ${
                              isActive
                                ? "text-white bg-DARKBLUE05"
                                : "text-black bg-white"
                            }`}
              onClick={changeActive}
            >
              {text}
        </button>
    )
}