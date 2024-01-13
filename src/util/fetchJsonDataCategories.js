import { 
    mensHoodies, mensShirts, mensPants, mensShorts, mensUnderwear,
    womensHoodies,womensShirts, womensPants, womensShorts, womensUnderwear
} from "./dummyData/index.js";

const categoriesMap = {
    "Mens Hoodies": mensHoodies,
    "Mens Shirts": mensShirts,
    "Mens Pants": mensPants,
    "Mens Shorts": mensShorts,
    "Mens Underwear": mensUnderwear,
    "Womens Hoodies": womensHoodies,
    "Womens Shirts": womensShirts,
    "Womens Pants": womensPants,
    "Womens Shorts": womensShorts,
    "Womens Underwear": womensUnderwear,
};

const fetchJsonDataCategories = async (searchTerm) => {
    console.log(`Searching JSON database for ${searchTerm}`);

    return categoriesMap[searchTerm];
};

export default fetchJsonDataCategories;
