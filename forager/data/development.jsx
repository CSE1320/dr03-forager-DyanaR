// data/development.js
const dummyData = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    infomessage: "Percentages indicate lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};

const attentionMessage = {
    header: "ATTENTION!",
    text: "Our system can make mistakes! Remember to verify important information and use your own judgement to determine if any mushroom is safe. Be sure to use the “Report Error” button if you suspect a mistake.",
};

const warningMessage = {
    header: "WARNING",
    text: "This is a toxic species, proceed with caution."
}

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

const defaultMushroom = {
        name: "Death Cap",
        image: "/picture.png",
        title: "Your Photo"
    }
       
const mushrooms = [
    { 
        name: "Death Cap", 
        scientificName: "Amanita phalloides",
        image: "/death-cap.png", 
        poisonous: true, 
        percentage: "80", 
        capDiameter: "5-15cm", 
        gillColor: "White", 
        stemColor: "White", 
        habitat: "Temperate regions"
    },
    { 
        name: "Paddy Straw", 
        scientificName: "Volvariella volvacea",
        image: "/paddy-straw.png", 
        poisonous: false, 
        percentage: "90",
        capDiameter: "3-10cm", 
        gillColor: "Pink", 
        stemColor: "Light brown", 
        habitat: "Tropical regions"
    },
    { 
        name: "Destroying Angel", 
        scientificName: "Amanita bisporigera",
        image: "/destroying-angel.png", 
        poisonous: true, 
        percentage: "80", 
        capDiameter: "5-10cm", 
        gillColor: "White", 
        stemColor: "White", 
        habitat: "Forests, grasslands"
    },
    { 
        name: "False Death Cap", 
        scientificName: "Amanita citrina",
        image: "/false-death-cap.png", 
        poisonous: true, 
        percentage: "70", 
        capDiameter: "4-12cm", 
        gillColor: "Cream", 
        stemColor: "Yellowish", 
        habitat: "Woodlands"
    },
    { 
        name: "Puffball", 
        scientificName: "Lycoperdon perlatum",
        image: "/puffball.png", 
        poisonous: false, 
        percentage: "60", 
        capDiameter: "4-20cm", 
        gillColor: "None (spores inside)", 
        stemColor: "None", 
        habitat: "Grasslands, forests"
    }
];


// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export {warningMessage, attentionMessage, dummyData, filterData, defaultMushroom, mushrooms}; // Requires import {warningMessage, dummyData} from './data/development.js';
