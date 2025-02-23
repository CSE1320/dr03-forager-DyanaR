import styles from '../styles/FilterSettings.css'
import PillList from './PillList'
import { IoMdClose } from "react-icons/io";
import {filterData} from "../data/development.jsx"


export default function FilterSettings({closeFilter}) {

    return(
        <div className='filter-container'>
            <div className='header'>
                <h5>FILTER</h5>
                <IoMdClose onClick={closeFilter} />
            </div>
            <div className='pill-list'>
            {filterData.map((filter, idx) => (
                <PillList key={idx} heading={filter.title} pills={filter.pills}/>
            ))}
            </div>
               
        </div>
    )
}