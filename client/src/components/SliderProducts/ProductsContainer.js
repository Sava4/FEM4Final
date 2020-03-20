import React, { useEffect } from "react";
import { useLocation, withRouter } from "react-router";
import { connect } from "react-redux";
import {
  setCurrentPage,
  useRequestProducts,
  useMoreProducts
} from "../../store/productsReducer";
import { ProductsPagination } from "./Pagination";
// import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
  getCurrentPage,
  getPageSize,
  getTotalProductsCount,
  getProducts,
  moreProducts
} from "./users-selectors";

const ProductsContainer = props => {
  console.log(props);
  const { currentPage, pageSize } = props;

  let location = useLocation();
  let path = `filter${location.search}`;

  const queryString = require("query-string");
  const parsed = queryString.parse(location.search);
  const truePage = parsed.startPage;
  console.log(truePage);

  useEffect(() => {
    props.getProducts(truePage, pageSize);
  }, [truePage]);
  // useEffect(() => {
  //   props.moreProducts(truePage, pageSize);
  // }, [truePage]);

  const onPageChanged = pageNumber => {    // из пагинатора
    const { pageSize } = props;  
    props.getProducts(pageNumber, pageSize);
  };
  const onLoadMore = pageNumber => {   // из пагинатора
    const { pageSize } = props;  
    props.moreProducts(pageNumber, pageSize);
  };



  return (
    <>
      {/* {this.props.isFetching ? <Preloader/> : null} */}
      <ProductsPagination
        productsQuantity={props.productsQuantity}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={onPageChanged}
        onLoadMore={onLoadMore}
        products={props.products}
      />
    </>
  );
};

let mapStateToProps = state => {
  return {
    
    products: getProducts(state),
    products: moreProducts(state),
    pageSize: getPageSize(state),
    productsQuantity: getTotalProductsCount(state),
    currentPage: getCurrentPage(state)
  };
};

let UrlProductsContainer = withRouter(ProductsContainer);
export default compose(
  connect(mapStateToProps, { setCurrentPage, getProducts: useRequestProducts, moreProducts: useMoreProducts }) //mapDispatchToProps
)(UrlProductsContainer);
