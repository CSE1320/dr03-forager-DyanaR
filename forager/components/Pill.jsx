"use client";
import {useState} from 'react';

export default function Pill({text}){
    const [active, setActive] = useState(false);

    return (
        <button  
            onClick={() => setActive(!active)}
            className={`px-4 rounded-2xl text-center text-base font-medium transition-colors duration-200 
            whitespace-nowrap max-w-full
            ${active ? "bg-[#579076] text-white" : "bg-[#D9D9D9] text-[#7C7C7C]"}`} >
            <p>{text}</p>
        </button >
    )
}