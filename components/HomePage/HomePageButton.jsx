import {useState} from 'react';

export default function HomePageButton({name}){
    const [IsActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!IsActive);
    }
    return(
    <>
    <button 
        onClick={handleClick}
        className={`rounded-2xl px-3 text-base p-1 font-bold ${IsActive ? 'bg-DARKBLUE05 text-white' : 'bg-check-fill text-black'}`}>
        {name}
    </button>
    </>
    )
}