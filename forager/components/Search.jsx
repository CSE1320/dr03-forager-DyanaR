import { CiFilter } from "react-icons/ci";
import { FaSearch } from 'react-icons/fa';
import styles from '../styles/Search.css'

export default function Search(){
    return(
        <div className="search">
            <div className="input">
                <FaSearch/>
                <input type="text" placeholder="Search for a mushroom"/>
            </div>
            <CiFilter />
        </div>
    )
}