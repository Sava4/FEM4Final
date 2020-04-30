import React from "react";
import { Paginator } from "./Paginator";
import { LoadMore } from "./LoadMore";
import { ProductItem } from "../ProductsList/ProductItem";
import styles from "./Paginator.module.css";
import cn from "classnames";
import { useParams } from "react-router";

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
  category2,
  ...props
}) => {
  ///// игоря
  const { category } = useParams();
  return (
    <div>
      {/* <Layout> */}
      <div
        style={{
          position: "absolute",
          top: "84%",
          right: "14%",
        }}
      >
        <Paginator
          // info={1}
          currentPage={currentPage}
          onPageChanged={onPageChanged}
          onLoadMore={onLoadMore}
          productsQuantity={productsQuantity}
          pageSize={pageSize}
          categoryQuery={categoryQuery}
          category={category}
          apiCategory={apiCategory}
          category2={category2}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          minWidth: "260px",
          margin: "0 auto",
        }}
      >
        {products.map((p, index) => (
          <div id={index} key={p.itemNo}>
            <ProductItem
              product={p}
              {...p}
              id={p._id}
              itemNo={`${p.itemNo}`}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              interpretation={"carousel"}
              img={p.imageUrls}
            />
          </div>
        ))}
        {/* <FilteredListProducts category={category} /> */}
      </div>
      {/* <div style={{ width: "100%", display: "block" }}> */}
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
      {/* </div> */}
      <div
        className={cn(
          styles.bottom      
        )}
      >
        <Paginator
          currentPage={currentPage}
          onPageChanged={onPageChanged}
          onLoadMore={onLoadMore}
          productsQuantity={productsQuantity}
          pageSize={pageSize}
          truePage={truePage}
          category={category}
          category2={category2}
          categoryQuery={categoryQuery}
        />
      </div>
      {/* </Layout> */}
    </div>
  );
};
