import styles from "./Paginator.module.css";
import cn from "classnames";
import React, { useEffect } from "react";

export const LoadMore = ({
  currentPage,
  productsQuantity,
  pageSize,
  onLoadMore,
  onToTop,
  products,
  parsed,
  ...props
}) => {
  //   async function q(){
  //     (+currentPage<4)&&( onLoadMore(+currentPage + 1) )
  //  const el = await document.getElementById(`${products.length}`)
  //  (+currentPage<4)&&(el.scrollIntoView({behavior:"smooth"}))
  // }
  // console.log(parsed)//undefined
  return (
    <>
      <div
        className={cn(
          {
            [styles.active]: +currentPage < productsQuantity / pageSize
          },
          styles.load_more,
          styles.unactive
        )}
        onClick={e => {
          // q()
          +currentPage < productsQuantity / pageSize &&
            onLoadMore(+currentPage + 1); //передаем в контейнер и загружаем нужную страницу

          // setTimeout(function() {
          //   const el = document.getElementById(`${products.length}`);
          //   +currentPage < productsQuantity / pageSize &&
          //     el.scrollIntoView({ behavior: "smooth" });
          // }, 3000);
        }}
      >
        loadmore
      </div>

      <div
        className={cn(
          {
            [styles.active]: +currentPage < productsQuantity
          },
          styles.arrow,
          styles.top
        )}
        onClick={e => {
          onToTop();
        }}
      ></div>
    </>
  );
};

export const ScrollToTopController = props => {
  let parsed = props.parsed;
  console.log(parsed);
  useEffect(
    () => () => {
      try {
        window.scroll({
          top: 0, //рядов*высоту одного 2*258
          left: 0,
          behavior: "smooth"
        });
      } catch (error) {
        window.scrollTo(200, 0);
      }
    },
    [parsed]
  );
  return null;
};
