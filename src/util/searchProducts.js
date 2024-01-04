import axios from 'axios';

function SearchProducts() {
    // Define the API URL
    const apiUrl = 'https://fakestoreapi.com/products';

    // Use Axios to make the GET request
    return axios.get(apiUrl)
    .then(response => {
        // The response data is available in response.data
        console.log("API Response:", response.data);
        return response.data;
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        throw error; // You can handle the error as needed
    });
};
  
export default SearchProducts;