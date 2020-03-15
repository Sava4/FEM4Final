import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router";

const instance = axios.create({
  baseURL: "http://localhost:5000/"
});

export const productsAPI = {
  getProducts(currentPage, pageSize) {
    // const [products, setProducts] = useState({});
    console.log(currentPage);
    // useEffect(() => {
    // хук только из функционального компонента

    // let string = `filter?startPage=${currentPage}&perPage=${pageSize}`
    // string = useParams();

    // console.log(currentPage);
    // axios
    instance
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

// follow(userId) {
//     return instance.post(`follow/${userId}`)
// },
// unfollow(userId) {
//     return instance.delete(`follow/${userId}`)
// },
// getProfile(userId) {
//     console.warn('Obsolete method. Please profileAPI object.')
//     return profileAPI.getProfile(userId);
// }
//}

// export const profileAPI = {
//     getProfile(userId) {
//         return instance.get(`profile/` + userId);
//     },
//     getStatus(userId) {
//         return instance.get(`profile/status/` + userId);
//     },
//     updateStatus(status) {
//         return instance.put(`profile/status`, { status: status });
//     },
//     savePhoto(photoFile) {
//         const formData = new FormData();
//         formData.append("image", photoFile);

//         return instance.put(`profile/photo`, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         });
//     },
//     saveProfile(profile) {
//         return instance.put(`profile`, profile );
//     }
// }

// export const authAPI = {
//     me() {
//         return instance.get(`auth/me`);
//     },
//     login(email, password, rememberMe = false, captcha = null) {
//         return instance.post(`auth/login`, { email, password, rememberMe, captcha });
//     },
//     logout() {
//         return instance.delete(`auth/login`);
//     }
// }

// export const securityAPI = {
//     getCaptchaUrl() {
//         return instance.get(`security/get-captcha-url`);
//     }
// }
