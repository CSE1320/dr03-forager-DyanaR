import { LuFilter } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import styles from '../styles/Search.css'

export default function Search(){
    return(
        <div className="search">
            <div className="input">
                <IoIosSearch style={{fontSize: "1.2rem"}}/>
                <input type="text" placeholder="Search for a mushroom"/>
            </div>
            <div className="filter">
                <LuFilter />
            </div>
        </div>
    )
}