import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/"
});

export const productsAPI = {
  getProducts(currentPage, pageSize) {
    console.log(currentPage, pageSize);

    return instance
      .get(`/products/filter?startPage=${currentPage}&perPage=${pageSize}`)
      .then(response => {
        console.log(response.data);
        return response.data;
      });
  }
};
