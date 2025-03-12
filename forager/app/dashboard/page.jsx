"use client";
import {useState} from 'react'
import Search from '@/components/Search';
import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import FilterSettings from '@/components/FilterSettings';
import MushroomList from '@/components/MushroomList';
import { mushrooms } from '@/data/development';
import { useFavorites } from "@/context/FavoritesContext";

export default function DashboardPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activePills, setActivePills] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const { favorites } = useFavorites();

  const togglePill = (pillName) => {
    setActivePills(prev => ({
      ...prev,
      [pillName]: !prev[pillName]
    }));
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  let filteredMushrooms = mushrooms.filter(mushroom =>
    mushroom.name.toLowerCase().includes(searchQuery)
  );

  if (activePills["Favorites"]) {
    filteredMushrooms = favorites;
  }

  const selectedFilters = Object.keys(activePills).filter((pill) => activePills[pill]);

  return (
    <div className="page flex flex-col h-full bg-[url('/background.png')] bg-cover bg-center">
      <div className="text-white p-6 pt-10 flex justify-between items-center">
        <div>
          <p className="text-xl">Hi,</p>
          <h1 className="text-4xl font-bold">Chantelle!</h1>
        </div>
        <div className="bg-[#5F464B] text-white border-2 border-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
          C
        </div>
      </div>

      <div className="dash-container">
        <Search toggleFilter={() => setIsFilterOpen(true)} onSearch={handleSearch} />
        {isFilterOpen && (
          <FilterSettings 
            closeFilter={() => setIsFilterOpen(false)}
            activePills={activePills} 
            togglePill={togglePill}
          />
        )}  

        {/* Display Selected Filters */}
        {selectedFilters.length > 0 && (
          <div className="p-5 flex flex-wrap gap-2">
            {selectedFilters.map((filter, idx) => (
              <div 
                key={idx} 
                className="flex items-center bg-[#6BAF87] text-white rounded-full px-4 py-1 text-sm font-medium"
              >
                {filter}
              </div>
            ))}
          </div>
        )}

        <div className='p-5'>
          <h2 className="text-[#324053] text-2xl font-bold">My Collection</h2>
          <MushroomList 
            columns={3} 
            showPercentage={false} 
            mushrooms={filteredMushrooms}
          />
        </div>

        <NavBar />
      </div>
    </div>
  );
}
