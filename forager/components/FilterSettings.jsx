import PillList from './PillList';
import { IoMdClose } from "react-icons/io";
import { filterData } from "../data/development.jsx";

export default function FilterSettings({ closeFilter, activePills, togglePill }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[150]">
            <div className="bg-[#ededed] w-[95%] max-w-md rounded-2xl p-6 shadow-lg 
                            h-[95vh] max-h-[95vh] overflow-y-auto">
                {/* HEADER */}
                <div className="relative flex justify-center items-center w-full mb-4">
                    <h5 className="text-lg font-bold">FILTER</h5>
                    <IoMdClose 
                        onClick={closeFilter} 
                        className="absolute right-0 text-2xl cursor-pointer"
                    />
                </div>

                {/* FILTER SECTIONS */}
                <div className="px-4 space-y-6">
                    {filterData.map((filter, idx) => (
                        <PillList 
                            key={idx} 
                            heading={filter.title} 
                            pills={filter.pills} 
                            activePills={activePills}
                            togglePill={togglePill}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
