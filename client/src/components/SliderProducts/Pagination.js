import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Paginator } from "./Paginator";
import { LoadMore } from "./LoadMore";
import { ProductItem } from "./../ProductsList/productItem";
import { Layout } from "../common/Layout";
//игоря
import { useParams } from "react-router";
import { FilteredListProducts } from "./../../components/ProductsFilterList/FilteredProducts";
import { FilterIndicators } from "./../ProductsFilterList/SelectedProducts/FilterIndicators";
export const ProductsPagination = ({
  currentPage,
  truePage,
  productsQuantity,
  pageSize,
  onPageChanged,
  onLoadMore,
  onToTop,
  products,
  categoryQuery,
  apiCategory,  
  ...props
}) => {
  ///// игоря
  const { category } = useParams();
  return (
    <div>
      {/* <Layout> */}
      <FilterIndicators />
      <div
        style={{
          position: "relative",
          textAlign: "right"
        }}
      >
        <Paginator
          info={1}
          currentPage={currentPage}
          onPageChanged={onPageChanged}
          onLoadMore={onLoadMore}
          productsQuantity={productsQuantity}
          pageSize={pageSize}
          categoryQuery={categoryQuery}
          category={category}
          apiCategory={apiCategory}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          minWidth: "260px",
          margin: "0 auto"
        }}
      >
        {products.map((p, index) => (
          <div id={index} key={p.itemNo}>          
              <ProductItem
                product={p}
                {...p}
                itemNo={`${p.itemNo}`}
                style={{
                  display: "flex",
                  justifyContent: "center"
                }}
                interpretation={"carousel"}
                img={p.imageUrls[0]}
              />          
          </div>
        ))}
        {/* <FilteredListProducts category={category} /> */}
      </div>
      <div style={{ width: "100%", display: "block" }}>
        <LoadMore
          currentPage={currentPage}
          onPageChanged={onPageChanged}
          onLoadMore={onLoadMore}
          productsQuantity={productsQuantity}
          pageSize={pageSize}
          products={products}
          pageSize={pageSize}
          category={category}
        />
        <Paginator
          currentPage={currentPage}
          onPageChanged={onPageChanged}
          onLoadMore={onLoadMore}
          productsQuantity={productsQuantity}
          pageSize={pageSize}
          truePage={truePage}
          category={category}
        />
      </div>
      {/* </Layout> */}
    </div>
  );
};
