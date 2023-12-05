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
        className={`rounded-2xl px-3 p-1 font-bold shadow-2xl shadow-black hover:-translate-y-1 ${IsActive ? 'bg-secret-darkblue text-white' : 'bg-secret-cyan text-secret-text3'}`}>
        {name}
    </button>
    </>
    )
}