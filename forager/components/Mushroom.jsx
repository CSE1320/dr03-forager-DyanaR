import Link from "next/link";
import { IoIosArrowForward, IoMdAdd, IoMdClose, IoMdStar } from "react-icons/io";
import { BsInfoSquare } from "react-icons/bs";
import { dummyData } from '@/data/development';
import WarningMessage from "./WarningMessage";
import MushroomList from "./MushroomList";
import PolaroidCard from "./PolaroidCard";
import { useFavorites } from "@/context/FavoritesContext";

export default function Mushroom({ mushroom, warningMessage, onInfoClick, active, setActive, mushrooms }) {
    const { favorites, toggleFavorite } = useFavorites();
    const isFavorite = favorites.some((fav) => fav.name === mushroom.name);

    return (
        <div>
            {/* error message */}
            <div className="flex items-center justify-between mt-5 mr-10 ml-10">
                <p className="text-[#000000]">Not what you expected?</p>
                <button className="bg-[#FF5050] rounded-xl flex py-2 px-1.5">
                    Report Error 
                    <IoIosArrowForward className="text-white text-2xl cursor-pointer" />
                </button>
            </div>

            {/* warning message displays only if mushroom is toxic*/}
            {mushroom.poisonous && 
                <div className="mt-2 mr-10 ml-10">
                <WarningMessage title={warningMessage.header} message={warningMessage.text} />
                </div>
            }

            {/* compare button */}
            <div className="flex justify-end mt-6 mb-1 mr-10">
                <Link href="/comparison">
                    <button className="flex items-center gap-2 text-[#888787]">
                        Compare
                        <IoIosArrowForward /> 
                    </button>
                </Link>
            </div>

            {/* polaroid card*/}
            <div className="flex justify-center">
                <PolaroidCard mushroom={mushroom} showMatch={true} showSkull={true} size="large" />
            </div>

            {/* mushroom details */}
            <div className="flex mt-5 mr-10 ml-10 justify-between items-center">
                <div className="text-[#324053]">
                    <h1 className="text-3xl font-semibold">{mushroom.name}</h1>
                    <p className="text-lg"><i>{mushroom.scientificName}</i></p>
                </div>

                {/* favorite button */}
                <button 
                    className="w-12 h-12 bg-[#579076] rounded-full flex items-center justify-center"
                    onClick={() => toggleFavorite(mushroom)}
                >
                    {isFavorite ? <IoMdStar className="text-yellow-400 text-3xl" /> : <IoMdAdd className="text-white text-3xl" />}
                </button>
            </div>

            {/* fast facts */}
            <div className="bg-[#8E4A49] rounded-3xl mt-2 mr-10 ml-10 py-5 pl-5 pr-10">
                <h3 className="text-xl font-semibold">Fast Facts</h3>
                <div className="text-md font-thin pt-2">
                    <p>Cap Diameter: {mushroom.capDiameter}</p>
                    <p>Gill Color: {mushroom.gillColor}</p>
                    <p>Stem Color: {mushroom.stemColor}</p>
                    <p>Habitat: {mushroom.habitat}</p>
                </div>
            </div>

            {/* description */}
            <div className="text-[#000000] text-lg py-5 ml-10 mr-10">
                <p>{dummyData.description}</p>
            </div>

            {/* similar matches */}
            <div className="text-[#324053]">
                <div className="flex gap-2 items-center justify-center">
                    <h2 className="text-2xl font-bold">Similar Matches</h2>
                    <BsInfoSquare onClick={onInfoClick} className="cursor-pointer"/>
                </div>
                <MushroomList columns={2} showPercentage={true} mushrooms={mushrooms} />
            </div>

            {/* info message */}
            {active && (
                <div className="fixed inset-0 flex justify-center items-center backdrop-blur-[2px]">
                    <div className="bg-[#6BC591] text-white rounded-3xl p-6 w-80 shadow-lg relative">
                        <button className="absolute top-3 right-3 text-2xl cursor-pointer" onClick={() => setActive(false)}>
                            <IoMdClose />
                        </button>
                        <p>{dummyData.infomessage}</p>
                    </div>
                </div>
            )}
        </div>
    );
}