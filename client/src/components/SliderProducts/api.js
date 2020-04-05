import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/"
});

export const productsAPI = {
  getProducts(currentPage, pageSize, categoryQuery, apiCategory) {
    console.log(currentPage, pageSize,categoryQuery,apiCategory);

    return instance
      .get(`/products/filter?${apiCategory}&startPage=${currentPage}&perPage=${pageSize}`)
      .then(response => {
        console.log(response.data);
        return response.data;
      });
  }
};
