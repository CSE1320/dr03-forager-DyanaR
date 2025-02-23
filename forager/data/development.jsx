// data/development.js
const dummyData = {
    message: "This is dummy data from a config file",
    status: "success",
};

const warningMessage = {
    header: "warning",
    icon: "/icons/icon_warning.svg",
    message: "This is a toxic species, proceed with caution."
};

const filterData = [
    {
        title: "Tags",
        pills: ["Favorites", "Recents"]
    },
    {
        title: "Regions",
        pills: ["Texas", "North America", "South America", "Asia", "Europe", "Africa"]
    },
    {
        title: "Category",
        pills: ["Poisonous", "Medicinal", "Mythical", "Good for Broths"]
    }
];


// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export {warningMessage, dummyData, filterData}; // Requires import {warningMessage, dummyData} from './data/development.js';
