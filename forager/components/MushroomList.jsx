import MushroomCard from "./MushroomCard";
import {mushrooms} from "../data/development.jsx"

export default function MushroomList(){
    return (
        <div className="flex flex-col items-center mt-5">
        <h2 className="text-2xl text-[#324053] font-bold mb-5">Similar Matches</h2>
        <ul className="grid grid-cols-2 gap-6 md:gap-5 p-5 text-center list-none">
            {mushrooms.map((mushroom, idx) => (
                <MushroomCard 
                    key={idx} 
                    name={mushroom.name}
                    image={mushroom.image}
                    poisonous={mushroom.poisonous}
                    percentage={mushroom.percentage}
                />
            ))}
        </ul>
        </div>
    )
}