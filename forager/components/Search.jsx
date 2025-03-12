import { useState } from "react";
import { LuFilter } from "react-icons/lu";
import { IoIosSearch, IoMdClose } from "react-icons/io";

export default function Search({ toggleFilter, onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
    };

    const clearSearch = () => {
        setSearchQuery("");
        onSearch("");
    };

    return (
        <div className="flex items-center justify-between w-full pt-7">
            {/* search bar */}
            <div className="relative flex items-center gap-6 ml-5 bg-white text-black rounded-full px-4 w-4/5 shadow-md">
                <IoIosSearch className="text-lg" />
                <input
                    type="text"
                    placeholder="Search for a mushroom"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full h-10 outline-none rounded-full text-base"
                />
                
                {/* clear search button only visible when typing) */}
                {searchQuery && (
                    <button 
                        onClick={clearSearch} 
                        className="absolute right-3 text-gray-500 hover:text-gray-700"
                    >
                        <IoMdClose className="text-lg" />
                    </button>
                )}
            </div>

            {/* filter button */}
            <button onClick={toggleFilter} className="mr-7 text-[#579076] text-xl">
                <LuFilter />
            </button>
        </div>
    );
}
