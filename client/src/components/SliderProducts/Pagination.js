import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Paginator } from "./Paginator";
import { LoadMore } from "./LoadMore";
import { ProductItem } from "./productItemSlider";
import { Layout } from "../common/Layout";
//игоря
import { useParams } from "react-router";
import {FilteredListProducts} from "./../../components/ProductsFilterList/FilteredProducts"

export const ProductsPagination = ({
  currentPage,
  productsQuantity,
  pageSize,
  onPageChanged,
  onLoadMore,
  onToTop,
  products,
  categoryQuery,
  ...props
}) => {
  ///// игоря
  const { category } = useParams();
  return (
    <div>
      {/* <Layout> */}
        <div
          style={{
            position: "relative",
            left: "66%"
          }}
        >
          <Paginator
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            onLoadMore={onLoadMore}
            productsQuantity={productsQuantity}
            pageSize={pageSize}
            onToTop={onToTop}
            categoryQuery={categoryQuery}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "70%",
            margin: "0 auto"
          }}
        >
          {products.map((p, index) => (
            <div id={index} key={p.itemNo}>
              {console.log(index)}
              <NavLink
                to={`/product-details/${p.itemNo}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ProductItem
                  product={p}
                  {...p}
                  itemNo={`${p.itemNo}`}
                  style={{
                    display: "flex",
                    justifyContent: "center"
                  }}
                />
              </NavLink>
            </div>
          ))}
          {/* <FilteredListProducts category={category} /> */}
        </div>
        <div style={{ width: "100%", display: "block" }}>
          <LoadMore
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            onLoadMore={onLoadMore}
            onToTop={onToTop}
            productsQuantity={productsQuantity}
            pageSize={pageSize}
            products={products}
          />
          <Paginator
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            onLoadMore={onLoadMore}
            productsQuantity={productsQuantity}
            pageSize={pageSize}
            onToTop={onToTop}
          />
        </div>
      {/* </Layout> */}
    </div>
  );
};
