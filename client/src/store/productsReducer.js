import { productsAPI } from "../components/SliderProducts/api";
// import {updateObjectInArray} from "../components/SliderProducts/object-helpers";


const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_PRODUCTS_COUNT = 'SET_TOTAL_PRODUCTS_COUNT';


let initialState = {
    products: [],
    pageSize: 8,
    productsQuantity: 0,
    currentPage: 1,
 
    // fake: 10
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
     
        case SET_PRODUCTS: {
            return {...state, products: action.products}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_PRODUCTS_COUNT: {
            return {...state, productsQuantity: action.productsQuantity}
        }
      
        default:
            return state;
    }
}



export const setProducts = (products) => ({type: SET_PRODUCTS, products})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalProductsCount = (productsQuantity) => ({type: SET_TOTAL_PRODUCTS_COUNT, productsQuantity: productsQuantity})


// export const requestProducts = (page, pageSize) => {
//     return async (dispatch) => {  
//         dispatch(setCurrentPage(page));
// debugger
//         // let data = await productsAPI.getProducts(page, pageSize); 
//         let data = await productsAPI.getProducts(page, pageSize);

//         debugger    
//         console.log(data) 
//         // let data = await ProductsAPI(page, pageSize)  
//         dispatch(setProducts(data.products));
//         dispatch(setTotalProductsCount(data.productsQuantity));       
        
//     }
// }

export const requestProducts = (page, pageSize) => {
    return async (dispatch) => {
        // dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await productsAPI.getProducts(page, pageSize);
        // dispatch(toggleIsFetching(false));
        dispatch(setProducts(data.products));
        dispatch(setTotalProductsCount(data.productsQuantity)); 
    }
}