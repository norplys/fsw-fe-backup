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
        className={`rounded-2xl px-3 py-1 font-bold shadow-xl  hover:-translate-y-1 duration-300  ${IsActive ? 'bg-secret-darkblue text-white' : 'bg-secret-cyan text-secret-text3'} text-sm md:text-sm xl:text-base cursor-pointer`}

        value={name}
    />

    )
}