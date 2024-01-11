const fetchData = async (searchTerm) => {
    const url = `https://kohls.p.rapidapi.com/categories/list?search=${encodeURIComponent(searchTerm)}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default fetchData;