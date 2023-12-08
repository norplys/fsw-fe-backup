import { Carattere } from 'next/font/google';
import {useState} from 'react';

export default function HomePageButton({name, categoryId, handleChange, queryCategory}){
    const [IsActive, setIsActive] = useState(queryCategory.split(",").includes(categoryId.toString()));
    const handleClick = (categoryId) => {
        setIsActive(!IsActive);
        handleChange(categoryId);
    }
    return(
    <input
        type="button" 
        onClick={() => handleClick(categoryId)}
        className={`rounded-2xl px-3 p-1 font-bold shadow-2xl shadow-black hover:-translate-y-1 duration-300 ${IsActive ? 'bg-secret-darkblue text-white' : 'bg-secret-cyan text-secret-text3'}`}
        value={name}
    />

    )
}