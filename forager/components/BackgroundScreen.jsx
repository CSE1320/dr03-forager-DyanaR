import Link from 'next/link';
import { IoIosArrowBack, IoIosFlash } from "react-icons/io";
import { BsImage } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";

export default function BackgroundScreen() {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <img src="/picture.png" className="w-full h-full object-cover z-[-10]" alt="Background"/>

            <div className="bg-black/70 absolute top-0 left-0 w-full flex justify-between items-center pt-14 pb-3 px-5 text-white">
                <Link href="/dashboard" passHref>
                    <IoIosArrowBack className="text-4xl cursor-pointer" />
                </Link>
                <IoIosFlash className="text-4xl cursor-pointer" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-56 h-56 border-2 border-white"></div>
            </div>


            <div className="bg-black/70 absolute bottom-0 left-0 w-full p-6 flex justify-between items-center gap-4">
                <div className="">
                    <BsImage className="text-white text-3xl cursor-pointer" />
                </div>

                <Link href={`/mushroom?fromDashboard=false`}>
                    <button className="w-16 h-16 bg-white/50 rounded-full border-4 border-white"></button>
                </Link>
                
                <FiRefreshCw className="text-white text-3xl cursor-pointer" />
            </div>
        </div>
    );
}
