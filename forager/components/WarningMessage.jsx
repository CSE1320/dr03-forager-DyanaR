import { IoWarningOutline } from "react-icons/io5";

export default function WarningMessage({ title, message, onClose }) {
    return (
        <div className="bg-[#FF5050] rounded-3xl p-4 shadow-lg">
            <div className="flex items-center gap-2 text-2xl font-bold">
                <IoWarningOutline/>
                <h3>{title}</h3>
            </div>
            <p className="text-lg font-semibold">{message}</p>
        </div>
    );
}
