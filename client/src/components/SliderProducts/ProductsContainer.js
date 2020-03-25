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

// Console Warning below not used
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
  // Console warning unused below
  // let path = `filter${location.search}`;

  const queryString = require("query-string");
  const parsed = queryString.parse(location.search);
  const truePage = parsed.startPage;

  let truePage2;
  (!truePage && (truePage2 = +currentPage)) ||
    (truePage > 0 && (truePage2 = +truePage)); //чтобы c первой загрузки /pagin активна 1я страница

  useEffect(() => {
    props.getProducts(truePage2, pageSize);
    // Console Warning array requires pageSize, props
  }, [truePage2, pageSize, props]);

  const onPageChanged = pageNumber => {
    // из пагинатора
    const { pageSize } = props;
    props.getProducts(pageNumber, pageSize);
  };
  let truePage3 = +currentPage + 1;
  console.log(truePage3);

  const onLoadMore = truePage3 => {
    // можно pageNumber из пагинатора
    const { pageSize } = props;
    props.moreProducts(truePage3, pageSize);
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
      />
      {/* <ScrollToTopController parsed={parsed}/> */}
    </>
  );
};

let mapStateToProps = state => {
  // Console warning duplicate key products, products -> second changed to moreProducts
  return {
    products: getProducts(state),
    moreProducts: moreProducts(state),
    pageSize: getPageSize(state),
    productsQuantity: getTotalProductsCount(state),
    currentPage: getCurrentPage(state)
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
