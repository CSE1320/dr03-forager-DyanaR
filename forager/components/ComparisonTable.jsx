"use client";
import { useState } from "react";
import Table from "@/components/Table";
import PolaroidCard from "./PolaroidCard";
import { mushrooms, defaultMushroom } from "@/data/development";

export default function ComparisonTable() {
    const [features, setFeatures] = useState([
        { name: "Cap Shape", userInput: "Flat", value: "Flat" },
        { name: "Cap Color", userInput: "Brown", value: "Yellow" },
        { name: "Cap Texture", userInput: "Smooth", value: "Smooth" },
        { name: "Gills Type", userInput: "Free", value: "Free" },
        { name: "Gills Color", userInput: "White", value: "White" },
        { name: "Stem Shape", userInput: "Slender", value: "Slender" },
        { name: "Stem Color", userInput: "White", value: "White" },
        { name: "Stem Ring", userInput: "Absent", value: "Absent" },
        { name: "Habitat", userInput: "?", value: "Near oak/beech" },
    ]);

    
    const handleFeatureChange = (index, newValue) => {
        const updatedFeatures = [...features];
        updatedFeatures[index].userInput = newValue;
        setFeatures(updatedFeatures);
    };

    return (
        <div className="mt-10"> 
            
            <div className="flex items-center justify-center gap-6 m-5">
                <div className="flex flex-col items-center">                
                    <PolaroidCard mushroom={defaultMushroom} showMatch={false} showSkull={false} size="small" />
                    <h3 className="mt-2 text-lg font-bold text-[#324053]">Your Photo</h3>
                </div>

                <div className="flex flex-col items-center">
                    <PolaroidCard mushroom={mushrooms[0]} showMatch={true} showSkull={true} size="small" />
                    <h3 className="mt-2 text-lg font-bold text-[#324053]">{mushrooms[0].name}</h3>
                </div>
            </div>

            <div className="m-5 bg-white">
            
            <Table mushroomFeatures={features} onFeatureChange={handleFeatureChange} />
        </div>
        </div>
        
    );
}
