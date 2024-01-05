import axios from 'axios';

function searchProducts(searchTerm) {
    // API URL
    const apiUrl = 'https://fakestoreapi.com/products';


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
            throw error;
        });
};

export default searchProducts;