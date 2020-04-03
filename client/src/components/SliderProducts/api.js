import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/"
});

export const productsAPI = {
  getProducts(currentPage, pageSize, categoryQuery) {
    console.log(currentPage, pageSize,categoryQuery);

    return instance
      .get(`/products/filter?startPage=${currentPage}&perPage=${pageSize}${categoryQuery}`)
      .then(response => {
        console.log(response.data);
        return response.data;
      });
  }
};
