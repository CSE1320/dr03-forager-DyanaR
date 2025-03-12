import { IoWarningOutline } from "react-icons/io5";

export default function PolaroidCard({ 
    mushroom, 
    showMatch = false, 
    showSkull = false, 
    size = "large" 
}) {
    return (
        <ul>
           <li className="text-center">
                <div className="relative inline-block bg-white shadow-xl">
                    <div className={`min-h-[40px] ${showMatch ? "flex py-1.5 px-2 gap-2 top-2 left-2" : ""}`}>
                        {showMatch && (
                            <>
                                {showSkull && <img src="/icons/skull.png" alt="Deadly Warning" />}
                                <div className="flex items-center gap-1 bg-[#FF5050] text-white rounded-xl px-2">
                                    <IoWarningOutline className="text-lg" />
                                    <h3 className="text-sm">97% Match</h3>
                                </div>
                            </>
                        )}
                    </div>
                    
                    {/* mushroom image */}
                    <img 
                        className={`${size === "small" ? "w-[150px] h-[170px]" : "w-[330px] h-[310px]"} pr-1.5 pl-1.5 pb-10`}
                        src={mushroom.image}
                        alt={mushroom.name}
                    />
                </div>
            </li>
        </ul>

        
    );
}
