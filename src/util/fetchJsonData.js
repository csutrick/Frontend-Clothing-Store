import Shirts from "./dummyData/shirts.json"

const fetchJsonData = async (searchTerm) => {
    console.log(`Searching JSON databsse for ${searchTerm}s`);

    return { test: `Test data for ${searchTerm}` };
};

export default fetchJsonData;
