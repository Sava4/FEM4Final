import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router";

// let location = useLocation();
// let path = `filter${location.search}`;
// console.log(location);

// const queryString = require('query-string');
// const parsed = queryString.parse(location.search);
//  const init = parsed.startPage
// console.log(init)

const instance = axios.create({
  baseURL: "http://localhost:5000/"
});

export const productsAPI = {
  getProducts(currentPage, pageSize) {
    // const [products, setProducts] = useState({});
    console.log(currentPage, pageSize);
    // useEffect(() => {
    // хук только из функционального компонента

    // let string = `filter?startPage=${currentPage}&perPage=${pageSize}`
    // string = useParams();

    // axios
    return instance
      .get(`/products/filter?startPage=${currentPage}&perPage=${pageSize}`)
      .then(response => {
        console.log(response.data);
        return response.data;
      });
    // }, []);
  }
};

// export const ProductsAPI = (currentPage, pageSize) => {
//     // let { itemNo } = useParams();
// //    let string = `filter?startPage=${currentPage}&perPage=${pageSize}`
// //     string = useParams();
//     const [products, setProducts] = useState({});
//     //может не вызывать а передавать данные с продукта уже вызваного в слайдер? через пропсы или редакс
//     useEffect(() => {
//       axios
//         .get(`http://localhost:5000/products//filter?startPage=${currentPage}&perPage=${pageSize}`)
//         .then(response => {
//           setProducts(response.data);
//           console.log(response.data);
//           return response.data;
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     }, []);

// }
