import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/"
});

export const productsAPI = {
  getProducts(currentPage, pageSize, categoryQuery, apiCategory, category2) {
    console.log(currentPage, pageSize, categoryQuery, apiCategory, category2);

    return instance
      .get(
        // `/products/filter?${apiCategory}&startPage=${currentPage}&perPage=${pageSize}`
        `/products/filter?${categoryQuery}${category2}&startPage=${currentPage}&perPage=${pageSize}`

      )
      .then(response => {
        // console.log(response.data);
        return response.data;
      });
  }
};
