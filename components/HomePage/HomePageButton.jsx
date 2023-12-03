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
        className={`rounded-2xl px-3 p-1 font-bold ${IsActive ? 'bg-secret-orange text-black' : 'bg-secret-grey2 text-secret-text'}`}>
        {name}
    </button>
    </>
    )
}