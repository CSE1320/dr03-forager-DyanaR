import MushroomCard from "./MushroomCard";
import Link from "next/link";

export default function MushroomList({ columns = 2, showPercentage = true, mushrooms=[] }){
    
    const gridColsClass = columns === 3 ? "grid-cols-3" : "grid-cols-2";

    return (
        <div className="flex flex-col items-center mt-5">
            <ul className={`grid ${gridColsClass} gap-4 md:gap-5 text-center list-none`}>
                {mushrooms.map((mushroom, idx) => (
                    <Link key={idx} href={`/mushroom?fromDashboard=true`}>
                        <MushroomCard 
                            name={mushroom.name}
                            image={mushroom.image}
                            poisonous={mushroom.poisonous}
                            percentage={showPercentage ? mushroom.percentage : null}
                        />
                    </Link>
                ))}
            </ul>
        </div>
    )
}