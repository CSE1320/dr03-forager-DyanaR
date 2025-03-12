"use client";
import {useState, useEffect} from 'react';
import Link from "next/link";
import NavBar from '../../components/NavBar';
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import { mushrooms, warningMessage, attentionMessage } from '@/data/development';
import WarningMessage from '@/components/WarningMessage';
import Mushroom from '@/components/Mushroom';
import { useSearchParams } from "next/navigation";

export default function MushroomPage() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const fromDashboard = searchParams.get("fromDashboard") === "true";

  useEffect(() => {
    if (fromDashboard) {
        setShowWarning(true);
    }
  }, [fromDashboard]);

  const mushroomName = searchParams.get("name");
  const mushroom = mushrooms.find(m => m.name === mushroomName) || mushrooms[0];

  const filteredMushrooms = mushrooms.filter(m => m.name !== mushroom.name);

  return (
    <div className="page mb-20">
      {showWarning && (
        <div className="fixed inset-0 z-[100] flex justify-center items-center backdrop-blur-[2px]">
          <div className="relative m-6">
              <button className="absolute top-6 right-6 text-2xl cursor-pointer" onClick={() => setShowWarning(false)}>
                      <IoMdClose className='text-2xl'/>
              </button>
              <WarningMessage title={attentionMessage.header} message={attentionMessage.text} />
          </div>
        </div>
      )}
      {/* header */}
      <div className="bg-[#579076] rounded-b-3xl relative pt-12 pb-6 px-6 shadow-md">
        <Link href="/" className="absolute left-4 top-12">
          <IoIosArrowBack className="text-white text-2xl cursor-pointer" />
        </Link>
        <h1 className="text-center text-3xl font-bold">Match Results</h1>
      </div>
      <Mushroom 
                mushroom={mushroom} 
                warningMessage={warningMessage} 
                onInfoClick={() => setActive(true)}
                active={active}
                setActive={setActive}
                mushrooms={filteredMushrooms}
      />
      
        <div className="h-20"></div>

      <NavBar />
    </div>
  );
}
