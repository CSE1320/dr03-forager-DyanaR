"use client";
import {useState} from 'react'
import Search from '@/components/Search';
import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import FilterSettings from '@/components/FilterSettings';

export default function DashboardPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [activePills, setActivePills] = useState({});

  const togglePill = (pillName) => {
    setActivePills(prev => ({
      ...prev,
      [pillName]: !prev[pillName]
    }));
  };

  return (
    <div className="page bg-[#397367] flex flex-col h-full">
      <div className="bg-[#397367] text-white p-6 flex justify-between items-center">
        <div>
          <p className="text-lg">Hi,</p>
          <h1 className="text-3xl font-bold">Chantelle!</h1>
        </div>
        <div className="bg-white text-[#397367] rounded-full w-10 h-10 flex items-center justify-center font-bold">
          C
        </div>
      </div>
      <div className=" dash-container">
        <Search toggleFilter={() => setIsFilterOpen(true)} />
        {isFilterOpen && (
          <FilterSettings 
            closeFilter={() => setIsFilterOpen(false)}
            activePills={activePills} 
            togglePill={togglePill}
          />
        )}     
        <NavBar />
      </div>
    </div>
    
  );
}
