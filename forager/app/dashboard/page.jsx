"use client";
import {useState} from 'react'
import Search from '@/components/Search';
import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import FilterSettings from '@/components/FilterSettings';

export default function DashboardPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="page dash-container">
      <Search toggleFilter={() => setIsFilterOpen(true)} />
        {isFilterOpen && <FilterSettings closeFilter={() => setIsFilterOpen(false)}/>}
      <NavBar />
    </div>
  );
}
