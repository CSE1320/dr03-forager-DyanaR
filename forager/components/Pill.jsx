"use client";

export default function Pill({ text, isActive, togglePill }) {
    const activeClass = isActive ? "bg-[#579076] text-white" : "bg-[#D9D9D9] text-[#7C7C7C]";

    return (
        <button  
            onClick={() => togglePill(text)}
            className={`px-4 rounded-2xl text-center text-base font-medium transition-colors duration-200 
                whitespace-nowrap max-w-full ${activeClass}`} >
            <p>{text}</p>
        </button>
    );
}
