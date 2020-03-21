import React from "react";
import { NavLink } from "react-router-dom";
import Paginator from "./Paginator";
import { ProductItem } from "./productItemSlider";

export const ProductsPagination = ({
  currentPage,
  productsQuantity,
  pageSize,
  onPageChanged,
  onLoadMore,
  products,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        onLoadMore={onLoadMore}
        productsQuantity={productsQuantity}
        pageSize={pageSize}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "1000px",
          margin: "0 auto"
        }}
      >
        {products.map(p => (
          <div key={p.itemNo}>
            <NavLink
              to={`/product/${p.itemNo}`}
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
      </div>
    </div>
  );
};
