import { useState } from "react";

export default function ClassButton({text, handlePremium, value, active}) {
    const [isActive, setIsActive] = useState(false);
    function changeActive () {
        setIsActive(!isActive);
    }
    return (
        <button
              className={`rounded-full py-3 px-6 duration-300 font-bold hover:-translate-y-1 hover:shadow-xl
                            ${
                              active === value
                                ? "text-white bg-secret-darkblue"
                                : "bg-secret-cyan text-secret-text"
                            }`}
              onClick={() => {
                changeActive();
                handlePremium(value);
              }}
            >
              {text}
        </button>
    )
}