import Pill from "./Pill";

export default function PillList({ heading, pills, activePills, togglePill }) {
    return (
        <div className="pb-10">
            <h4 className="text-xl font-bold pb-3">{heading}</h4>
            <div className="flex flex-wrap gap-2">
                {pills.map((pillName, idx) => (
                    <Pill 
                        key={idx} 
                        text={pillName} 
                        isActive={activePills[pillName] || false} 
                        togglePill={togglePill}
                    />
                ))}
            </div>
        </div>
    );
}
