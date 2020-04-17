import styles from "./Paginator.module.css";
import cn from "classnames";
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export const LoadMore = ({
  apiCategory,
  currentPage,
  productsQuantity,
  pageSize,
  onLoadMore,
  products,  
  parsed,
  category,
  ...props
}) => {
  return (
    <>
     {/* <NavLink
        onClick={(e) => {
          // handleClickNext(e);
          // onTop();
        }}
        to={`/categories/${category}/filter?${apiCategory}&startPage=${currentPage},${+currentPage +
          1}&perPage=${pageSize}`}
      > */}
      <div
        className={cn(
          {
            [styles.active]: +currentPage < productsQuantity / pageSize
          },
          styles.load_more,
          styles.unactive
        )}
        onClick={e => {
          +currentPage < productsQuantity / pageSize &&
            onLoadMore(+currentPage + 1); //передаем в контейнер и загружаем нужную страницу
        }}
      >
        Load {pageSize} more products
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
          onTop();
        }}
      ></div>
      {/* </NavLink> */}
    </>
  );
};

export const ShowOnTop = props => {
  let [pos, setPos] = useState(window.pageYOffset);
  let [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let temp = window.pageYOffset;

      setVisible(pos > temp);
      setPos(temp);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      className={cn(
        {
          [styles.hidden]: visible // if controller inactive !visible
        },
        styles.arrow,
        styles.top,
        styles.onTop
      )}
      onClick={e => {
        onTop();
      }}
    />
  );
};

export const ScrollToTopController = props => {
  let parsed = props.parsed;
  useEffect(
    () => () => {
      onTop();
    },
    [parsed]
  );
  return null;
};
export const onTop = parsed => {
  try {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  } catch (error) {
    window.scrollTo(0, 0);
  }
  return null;
};
