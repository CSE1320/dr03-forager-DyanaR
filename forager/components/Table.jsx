import { IoMdClose } from "react-icons/io";

export default function Table({ mushroomFeatures, onFeatureChange }) {
    return (
        <div className="flex justify-center items-center mt-5">
            <table className="border-separate border-spacing-4 text-left">
                <tbody>
                    {mushroomFeatures.map((feature, index) => (
                        <tr key={index}>
                            {/* editable column */}
                            <td className="flex items-center gap-2 border-r border-[#203B5F] pr-2">
                                <button
                                    onClick={() => onFeatureChange(index, "")}
                                    className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300"
                                >
                                    <IoMdClose />
                                </button>
                                <input
                                    type="text"
                                    value={feature.userInput}
                                    onChange={(e) => onFeatureChange(index, e.target.value)}
                                    className="border-b-2 border-[#203B5F] outline-none w-16 text-[#324053] text-lg focus:border-gray-600 rounded-none"
                                />
                            </td>

                            {/* feature name column */}
                            <td className="border-r border-[#203B5F] px-2 text-[#324053] font-semibold">
                                {feature.name}
                            </td>

                            {/* predefined mushroom data column */}
                            <td className="px-2 text-[#324053]">{feature.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}