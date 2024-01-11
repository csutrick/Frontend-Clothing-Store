const fetchData = async (searchTerm) => {
    console.log(`Searching for ${searchTerm}s`);
    const url = `https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&keyword=${searchTerm}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
        }
    };

    try {
        console.log(`Found data for: ${searchTerm}`);
        const response = await fetch(url, options);
        const result = await response.json();
        return result.payload.products;
    } catch (error) {
        console.log(`No data found for: ${searchTerm}`);
        console.error(error);
        throw error;
    }
};

export default fetchData;