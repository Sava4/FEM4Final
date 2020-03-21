import React, { useEffect } from "react";
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
        {products.map((p,index) => (
          <div id={index} key={p.itemNo}>
    {console.log(index) }      
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
      <div style={{textAlign:"center", padding:"10px", border:"1px solid grey", width: "100px", margin:"0 auto", marginTop:"20px"}}
          onClick={e => {
            onLoadMore(+currentPage + 1)  ; //передаем в контейнер и загружаем нужную страницу
            setTimeout(function(){
              const el = document.getElementById(`${products.length}`);
              console.log(products.length)
              el.scrollIntoView({behavior:"smooth"})
            },300)  
         //отдельный компонент и в нем useEffect вместо setTimeout
          }}
        >          
          loadmore
        </div>
    </div>
  );
};


