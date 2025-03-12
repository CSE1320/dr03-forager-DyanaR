export default function MushroomCard({name, image, poisonous, percentage}){
    return (
        <li className="text-center">
            <div className="relative inline-block bg-white shadow-xl">
                <img 
                    className="w-[140px] h-[160px] p-1.5 pb-6"
                    src={image}
                    alt={name}
                />

                <div className="absolute top-2.5 left-2.5 flex items-center space-x-1">
                {/* add a variable for conciseness later */}
                    {percentage !== null && (
                        <div className={`text-white text-[12px] font-bold px-1 py-.8 rounded-md 
                        ${poisonous ? 'bg-red-500' : 'bg-green-500'}`}>
                        {percentage}%
                        </div>
                    )}
                    {poisonous && (
                        <img 
                            className="w-4 h-4"
                            src="/warning.png"
                            alt="Poisonous Warning"
                        />
                    )}
                </div>
            </div>

            <h4 className="mt-1 text-[#203B5F] font-semibold text-md whitespace-nowrap">
                {name}
            </h4>
        </li>
    )
}