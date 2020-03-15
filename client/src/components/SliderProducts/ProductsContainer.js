import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router";
import {connect} from 'react-redux';
import {    
    setCurrentPage,
    requestProducts
} from '../../store/productsReducer';
import {ProductsPagination} from './Pagination';
// import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,   
    getPageSize,
    getTotalProductsCount,
    getProducts
} from "./users-selectors";

// переписать на хуки и добавить useparams

const ProductsContainer = (props) => {
    const {currentPage, pageSize} = props;
    //   let string = `filter?startPage=${currentPage}&perPage=${pageSize}`
    //     string = useParams();
    // useParams(props);

    let location = useLocation()
    let path = `filter${location.search}`
    console.log(location)  

    useEffect(() => {   
    console.log(props) 
    props.getProducts(currentPage, pageSize);
    },[])
    const onPageChanged = (pageNumber) => {
        const {pageSize} = props;
        props.getProducts(pageNumber, pageSize);
    }
    
    return <>
    {/* {this.props.isFetching ? <Preloader/> : null} */}
    <ProductsPagination  productsQuantity={props.productsQuantity}
           pageSize={props.pageSize}
           currentPage={props.currentPage}
           onPageChanged={onPageChanged}
           products={props.products}                 
    />
</>
}










// class ProductsContainer extends React.Component {
//     componentDidMount() {
//         const {currentPage, pageSize} = this.props;
//         console.log(this.props)
     
//         this.props.getProducts(currentPage, pageSize);
       
//     }
//     onPageChanged = (pageNumber) => {
//         const {pageSize} = this.props;
//         this.props.getProducts(pageNumber, pageSize);
//     }

//     render() {

//         return <>
//             {/* {this.props.isFetching ? <Preloader/> : null} */}
//             <ProductsPagination  productsQuantity={this.props.productsQuantity}
//                    pageSize={this.props.pageSize}
//                    currentPage={this.props.currentPage}
//                    onPageChanged={this.onPageChanged}
//                    products={this.props.products}                 
//             />
//         </>
//     }
// }

let mapStateToProps = (state) => {
    return {
        products: getProducts(state),
        pageSize: getPageSize(state),
        productsQuantity: getTotalProductsCount(state),
        currentPage: getCurrentPage(state),          
    }
}


export default compose(
    connect(mapStateToProps, {setCurrentPage,  getProducts: requestProducts})
)(ProductsContainer)