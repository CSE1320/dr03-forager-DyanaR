import Pill from "./Pill";
import styles from '../styles/PillList.css'
export default function PillList({heading, pills}){
    return (
        <div className="pill-container">
            <h4>{heading}</h4>
            <div  className="pills">
            {pills.map((pillName,idx)=> (
                    <Pill key={idx} text={pillName}/>
            ))}
            </div>
            
        </div>
    )
}