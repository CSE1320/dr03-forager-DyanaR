import PillList from './PillList'
import { IoMdClose } from "react-icons/io";
import {filterData} from "../data/development.jsx"


export default function FilterSettings({closeFilter}) {

    return(
        <div className='flex flex-col p-4 bg-[#ededed] rounded-2xl h-full m-6'>
            <div className='relative flex justify-center items-center w-full p-4'>
                <h5 className="text-lg font-bold absolute left-1/2 transform -translate-x-1/2">
                    FILTER
                </h5>
                <IoMdClose 
                onClick={closeFilter} 
                className="absolute right-0 text-2xl cursor-pointer"
                />
            </div>
            <div className="px-4">
            {filterData.map((filter, idx) => (
                <PillList key={idx} heading={filter.title} pills={filter.pills}/>
            ))}
            </div>
               
        </div>
    )
}