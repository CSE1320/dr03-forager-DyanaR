"use client";
import {useState} from 'react';
import styles from '../styles/Pill.css'

export default function Pill({text}){
    const [active, setActive] = useState(false);

    return (
        <button  className={`pill ${active ? "pill-active" : ""}`} onClick={() => setActive(!active)}>
            <p>{text}</p>
        </button >
    )
}