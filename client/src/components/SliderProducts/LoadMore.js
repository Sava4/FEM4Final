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
        className={cn(styles.top2)}
        onClick={e => {
          onTop();
        }}
      >
        <div
          className={cn(
            {
              [styles.active]: +currentPage < productsQuantity
            },
            styles.arrow,
            styles.top
          )}
        />
      </div>
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

export function onTop(toppp = 0) {
  try {
    window.scroll({
      top: toppp,
      left: 0,
      behavior: "smooth"
    });
  } catch (error) {
    window.scrollTo(toppp, 0);
  }
  return null;
}
