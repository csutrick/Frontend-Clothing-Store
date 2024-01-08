import axios from 'axios';

async function APIRequest() {
    const apiUrl = 'https://fakestoreapi.com/products';

    try {
        const response = await axios.get(apiUrl);

        return response.data;
    } catch (error) {
        return { error: error.message };
    }
}

export default APIRequest;