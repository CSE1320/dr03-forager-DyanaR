import ComparisonTable from '@/components/ComparisonTable';
import NavBar from '../../components/NavBar';
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { warningMessage } from '@/data/development';
import WarningMessage from '@/components/WarningMessage';

export default function MushroomComparisonPage() {
  return (
    <div className="page ">
      {/* header */}
      <div className="bg-[#579076] rounded-b-3xl relative pt-12 pb-6 px-6 shadow-md">
        <Link href="/mushroom" className="absolute left-4 top-12">
          <IoIosArrowBack className="text-white text-2xl cursor-pointer" />
        </Link>
        <h1 className="text-center text-3xl font-bold">Compare</h1>
      </div>
        <div className="mt-10 mr-10 ml-10">
          <WarningMessage title={warningMessage.header} message={warningMessage.text} />
        </div>
      <ComparisonTable/>
      <div className="h-20"></div>

      <NavBar />
    </div>
  );
}
