import React, { useState, useEffect } from "react";
import { useParams, useLocation, withRouter } from "react-router";
import { connect } from "react-redux";
import querystring from "query-string";
import { Redirect } from "react-router-dom";
import {
  setCurrentPage,
  useRequestProducts,
  useMoreProducts
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
  moreProducts
} from "./users-selectors";

const ProductsContainer = props => {
  // console.log(props);
  const { currentPage, pageSize } = props;

  let location = useLocation();
  let path = `filter${location.search}`;
  console.log("TCL: path", path);

  const { category } = useParams();
  const queryString = [];
  for (let key in props.filters) {
    props.filters[key].length &&
      queryString.push(`${key}=${props.filters[key].join(",")}`);
  }

  const query = querystring.stringify(props.filters, { arrayFormat: "comma" });
  const categoryQuery = `${query}`;
  // console.log("TCL: categoryQuery", categoryQuery);
  const category2 = `&categories=${category}`;
  // let category3
  const apiCategory = categoryQuery + category2;

  // console.log("TCL: apiCategory", apiCategory);

  const queryString2 = require("query-string");
  const parsed = queryString2.parse(location.search);
  const truePage = parsed.startPage;

  let truePage2;
  (!truePage && (truePage2 = +currentPage)) ||
    (truePage > 0 && (truePage2 = +truePage)); //чтобы c первой загрузки /pagin активна 1я страница

  useEffect(() => {
    //первая загрузка откроется, и номер страницы в урле, и работает назад вперед
    props.getProducts(truePage2, pageSize, categoryQuery, apiCategory);
  }, [truePage2, query]);

  // let [filtered, setFiltered] = useState(false)
  // let [truePage5,setTruePage5]= useState(truePage2)
  // // useEffect (() => {

  // // }, []);
  // if((query.length>1)&&(filtered===true)){//второй раз
  //   setTruePage5(truePage2)
  //   props.getProducts(truePage5, pageSize, categoryQuery, apiCategory )
  // }

  // useEffect(() => {//при фильтрации обновление и появляется урл с фильтром, но при обновлении страницы откроется первая
  //   (props.getProducts(truePage2=1, pageSize, categoryQuery, apiCategory ))
  //   return truePage2
  // }, [apiCategory]);

  //  все классно но фильтрует не возвращая на 1ю

  const onPageChanged = pageNumber => {
    // из пагинатора
    const { pageSize } = props;
    props.getProducts(pageNumber, pageSize, categoryQuery, apiCategory);
  };
  let truePage3 = +currentPage + 1;
  console.log(truePage3);

  const onLoadMore = truePage3 => {
    // можно pageNumber из пагинатора
    const { pageSize } = props;
    props.moreProducts(truePage3, pageSize, categoryQuery, apiCategory);
  };

  return (
    <>
      {/* {this.props.isFetching ? <Preloader/> : null} */}
      {/* при выборе фильтра возвращает на первую страницу */}
      <Redirect
        to={`/categories/${category}/filter?${apiCategory}&startPage=${truePage2}&perPage=${pageSize}`}
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
        apiCategory={apiCategory}
        truePage={truePage}
      />

      {/* <ScrollToTopController parsed={parsed}/> */}
    </>
  );
};

let mapStateToProps = (state, categoryQuery, apiCategory, query) => {
  return {
    apiCategory: apiCategory,
    categoryQuery: categoryQuery,
    products: getProducts(state),
    products: moreProducts(state),
    pageSize: getPageSize(state),
    productsQuantity: getTotalProductsCount(state),
    currentPage: getCurrentPage(state),
    filters: state.filters.selFilters,
    query: query
  };
};

let UrlProductsContainer = withRouter(ProductsContainer);
export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    getProducts: useRequestProducts,
    moreProducts: useMoreProducts
  }) //mapDispatchToProps
)(UrlProductsContainer);
