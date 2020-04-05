import React, { useEffect } from "react";
import { useParams,useLocation, withRouter } from "react-router";
import { connect } from "react-redux";
import querystring from "query-string";
import {
  setCurrentPage,
  useRequestProducts,
  useMoreProducts
} from "../../store/productsReducer";
import { ProductsPagination } from "./Pagination";
// import Preloader from "../common/Preloader/Preloader";
import { ScrollToTopController } from "./LoadMore";
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
  console.log("TCL: path", path)
  
  const queryString2 = require("query-string");
  const parsed = queryString2.parse(location.search);
  const truePage = parsed.startPage;

  let truePage2;
  (!truePage && (truePage2 = +currentPage)) ||
    (truePage > 0 && (truePage2 = +truePage)); //чтобы c первой загрузки /pagin активна 1я страница

    const { category } = useParams();
    const queryString = [];
    for (let key in props.filters) {
      props.filters[key].length &&
        queryString.push(`${key}=${props.filters[key].join(",")}`);    }
    
    const query = querystring.stringify(props.filters, { arrayFormat: "comma" });
    const categoryQuery=`${query}`
    const category2=`&categories=${category}`
    console.log("TCL: categoryQuery", categoryQuery)
    const apiCategory=query+category2
    // (apiCategory!==undefined)&&apiCategory
    console.log("TCL: apiCategory", apiCategory)

  useEffect(() => {
    props.getProducts(truePage2, pageSize, categoryQuery,apiCategory );
  }, [truePage2]);

  const onPageChanged = pageNumber => {
    // из пагинатора
    const { pageSize } = props;
    props.getProducts(pageNumber, pageSize, categoryQuery,apiCategory );
  };
  let truePage3 = +currentPage + 1;
  console.log(truePage3);

  const onLoadMore = truePage3 => {
    // можно pageNumber из пагинатора
    const { pageSize } = props;
    props.moreProducts(truePage3, pageSize, categoryQuery, apiCategory);
  };
 

  
  
  
  const onToTop = parsed => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
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
        onToTop={onToTop}
        products={props.products}
        parsed={parsed}
        categoryQuery={categoryQuery}
        category={category}
      />
      {/* <ScrollToTopController parsed={parsed}/> */}
    </>
  );
};

let mapStateToProps = (state, store, categoryQuery,apiCategory) => {
  return {
    apiCategory: apiCategory,
    categoryQuery: categoryQuery,
    products: getProducts(state),
    products: moreProducts(state),
    pageSize: getPageSize(state),
    productsQuantity: getTotalProductsCount(state),
    currentPage: getCurrentPage(state),   
    filters: state.filters.selFilters
  };
};


let UrlProductsContainer = withRouter(ProductsContainer);
export default compose(
  connect(mapStateToProps,{
    setCurrentPage,
    getProducts: useRequestProducts,
    moreProducts: useMoreProducts,
    
  }) //mapDispatchToProps
)(UrlProductsContainer);
