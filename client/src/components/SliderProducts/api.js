import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/"
});

export const productsAPI = {
  getProducts(currentPage, pageSize, categoryQuery, apiCategory) {
    console.log(currentPage, pageSize,categoryQuery,apiCategory);

    return instance
      .get(`/products/filter?startPage=${currentPage}&perPage=${pageSize}&${apiCategory}`)
      .then(response => {
        console.log(response.data);
        return response.data;
      });
  }
};
