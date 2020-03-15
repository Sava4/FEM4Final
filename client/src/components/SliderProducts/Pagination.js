import React from "react";
import { NavLink } from "react-router-dom";
import Paginator from "./Paginator";
import { ProductItem } from "./productItemSlider";
import { useParams, useLocation } from "react-router";

export const ProductsPagination = ({
  currentPage,
  productsQuantity,
  pageSize,
  onPageChanged,
  products,
  ...props
}) => {
  // console.log(products);
  // let {string} = `filter?startPage=${currentPage}&perPage=${pageSize}`;
  // console.log(string)
  // string = useParams();
  // useParams(string);
  // currentPage = useParams()
  // console.log(currentPage)

  // let {string} = `filter?startPage=${currentPage}&perPage=${pageSize}`

  // в math params только filter остальные параметры в Location

  //   string = useParams();
  //   console.log(string)
  // let location = useLocation()
  // let path = location.search
  // console.log(location)
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        productsQuantity={productsQuantity}
        pageSize={pageSize}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "1200px",
          margin: "0 auto"
        }}
      >
        {products.map(p => (
          <div key={p.id}>
            <NavLink
              key={p.id}
              to={`/product/${p.itemNo}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ProductItem
                key={p.id}
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
