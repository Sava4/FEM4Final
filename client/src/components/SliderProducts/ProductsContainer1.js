import React, { useState, useEffect } from "react";
import { useParams, useLocation, withRouter } from "react-router";
import { connect } from "react-redux";
import querystring from "query-string";
import { Redirect } from "react-router-dom";
import {
  setCurrentPage,
  useRequestProducts,
  useMoreProducts,
} from "../../store/productsReducer";
import { ProductsPagination } from "./Pagination";
// import Preloader from "../common/Preloader/Preloader";
// import { ScrollToTopController } from "./LoadMore";
import { compose } from "redux";
import {
  getCurrentPage,
  getPageSize,
  getTotalProductsCount,
  getProducts,
  moreProducts,
} from "./users-selectors";

const ProductsContainer = (props) => {
console.log("TCL: ProductsContainer -> props", props)

  const { currentPage, pageSize } = props;

  // const { category, setCategory } = useState();

  let location = useLocation();  
  let category5 = useParams();

  let path = `filter${location.search}`;  
  console.log("TCL: path", path);
 
  console.log("TCL: ProductsContainer -> category5 ", category5.category )
  let category
  category5.category && category5.category && (category=category5.category);

  console.log("TCL: ProductsContainer -> category", category)
  
  let [category2, setCategory2] = useState("");
  category === "earrings" &&
   (setCategory2 = `&categories=${category}`);

// let category2 = `&categories=${category}`
 

  const queryString = [];
  for (let key in props.filters) {
    props.filters[key].length &&
      queryString.push(`${key}=${props.filters[key].join(",")}`);
  }

  const query = querystring.stringify(props.filters, { arrayFormat: "comma" });
  const categoryQuery = `${query}`;
  // console.log("TCL: categoryQuery", categoryQuery);

  const apiCategory = categoryQuery + category2;

  const queryString2 = require("query-string");
  const parsed = queryString2.parse(location.search);
  const truePage = parsed.startPage;

  let truePage2;
  (!truePage && (truePage2 = +currentPage)) ||
    (truePage > 0 && (truePage2 = +truePage)); //чтобы c первой загрузки /pagin активна 1я страница

  query && query.length > 0 && (truePage2 = 1); // чтобы при активации фильтров сбрасывало на 1ю страницу

  useEffect(() => {
    //первая загрузка откроется, и номер страницы в урле, и работает назад вперед
    props.getProducts(
      truePage2,
      pageSize,
      categoryQuery,
      apiCategory,
      category2
    );
  }, [truePage2, query]);

  const onPageChanged = (pageNumber) => {
    // из пагинатора
    const { pageSize } = props;
    props.getProducts(
      pageNumber,
      pageSize,
      categoryQuery,
      apiCategory,
      category2
    );
  };
  let truePage3 = +currentPage + 1;
  console.log(truePage3);

  const onLoadMore = (truePage3) => {
    // можно pageNumber из пагинатора
    const { pageSize } = props;
    props.moreProducts(
      truePage3,
      pageSize,
      categoryQuery,
      apiCategory,
      category2
    );
  };

  return (
    <>
      {/* {this.props.isFetching ? <Preloader/> : null} */}
      {/* при выборе фильтра возвращает на первую страницу */}
      <Redirect
        to={`/categories/filter?${categoryQuery}${category2}&startPage=${truePage2}&perPage=${pageSize}`}
      />

      <ProductsPagination
        style={{ width: "60%" }}
        productsQuantity={props.productsQuantity}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={onPageChanged}
        onLoadMore={onLoadMore}
        products={props.products}
        parsed={parsed}
        categoryQuery={categoryQuery}
        category={category}
        category2={category2}
        apiCategory={apiCategory}
        truePage={truePage}
      />

      {/* <ScrollToTopController parsed={parsed}/> */}
    </>
  );
};

let mapStateToProps = (state, categoryQuery, apiCategory, category2, query) => {
  return {
    category2: category2,
    apiCategory: apiCategory,
    categoryQuery: categoryQuery,
    query: query,
    products: getProducts(state),
    products: moreProducts(state),
    pageSize: getPageSize(state),
    productsQuantity: getTotalProductsCount(state),
    currentPage: getCurrentPage(state),
    filters: state.filters.selFilters,
  };
};

let UrlProductsContainer = withRouter(ProductsContainer);
export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    getProducts: useRequestProducts,
    moreProducts: useMoreProducts,
  }) //mapDispatchToProps
)(UrlProductsContainer);
