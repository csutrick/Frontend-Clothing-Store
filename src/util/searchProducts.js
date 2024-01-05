import axios from 'axios';

function searchProducts(searchTerm) {
    // Define the API URL
    const apiUrl = 'https://fakestoreapi.com/products';

    // Use Axios to make the GET request
    return axios.get(apiUrl)
        .then(response => {
            // Check if the searchTerm is not empty
            if (searchTerm !== "") {
                // Filter products based on the search term
                const filteredProducts = response.data.filter(product =>
                    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    product.description.toLowerCase().includes(searchTerm.toLowerCase())
                );

                console.log("Filtered Products:", filteredProducts);
                return filteredProducts;
            } else {
                // If searchTerm is empty, return all products
                console.log("All Products:", response.data);
                return response.data;
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            throw error; // You can handle the error as needed
        });
};

export default searchProducts;