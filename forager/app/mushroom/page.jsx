import Link from 'next/link';
import NavBar from '../../components/NavBar';
import MushroomCard from '@/components/MushroomCard';
import MushroomList from '@/components/MushroomList';
import { IoIosArrowBack } from "react-icons/io";


export default function MushroomPage() {
  return (
    <div className="page bg-[#F2F2F2]">
      <div className="bg-[#579076] rounded-b-3xl relative pt-12 pb-6 px-6 shadow-md">
      <Link href="/" className="absolute left-4 top-12">
          <IoIosArrowBack className="text-white text-2xl cursor-pointer" />
        </Link>
        <h1 className="text-center text-xl font-bold">Match Results</h1>
      </div>

      <MushroomList />
      <Link href="/comparison">
        <button>Go to Mushroom Comparison Page</button>
      </Link>

      <NavBar />
    </div>
  );
}
