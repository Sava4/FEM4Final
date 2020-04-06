import React, { useState } from "react";
import { useParams } from "react-router";
import styles from "./Paginator.module.css";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { onTop } from "./LoadMore";

export const Paginator = ({
  productsQuantity,
  pageSize,
  currentPage,
  truePage,
  onPageChanged,
  info,
  apiCategory,
  portionSize = 3 //количество страниц в порции
}) => {
  let pagesCount = Math.ceil(productsQuantity / pageSize); //количество страниц всего

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const { category } = useParams();
  let portionCount = Math.ceil(pagesCount / portionSize); // количество порций
  let [portionNumber, setPortionNumber] = useState(1); // номер порции начальный локальный стейт

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  //   console.log(leftPortionPageNumber )
  //  console.log(rightPortionPageNumber )
  console.log(apiCategory);
  let apiCategory2;
  apiCategory && (apiCategory2 = apiCategory);
  const handleClickNext = e => {
    +currentPage == +pagesCount && e.preventDefault();
  };
  const handleClickPrev = e => {
    +currentPage <= 1 && e.preventDefault();
  };

  return (
    <div className={styles.paginator}>
      {info == 1 && (
        <span style={{ margin: "40px" }}>
          товаров {productsQuantity} страниц {pagesCount}
        </span>
      )}
      <NavLink
        onClick={e => {
          handleClickPrev(e);
          onTop();
        }}
        to={`/categories/${category}/filter?${apiCategory}&startPage=${+currentPage -
          1}&perPage=${pageSize}`}
      >
        {console.log(apiCategory)}
        {portionNumber > 1 &&
          currentPage < leftPortionPageNumber &&
          setPortionNumber(portionNumber - 1)}
        <span
          className={cn(
            {
              [styles.active]: currentPage > 1
            },
            styles.unactive,
            styles.arrow,
            styles.prev
          )}
        ></span>
      </NavLink>
      {pages
        .filter(
          pageNumber =>
            pageNumber >= leftPortionPageNumber &&
            pageNumber <= rightPortionPageNumber
        )
        .map(pageNumber => {
          return (
            <NavLink
              to={`/categories/${category}/filter?${apiCategory}&startPage=${pageNumber}&perPage=${pageSize}`}
              key={pageNumber}
              onClick={e => {
                onTop();
              }}
            >
              <span
                className={cn(
                  {
                    [styles.selected_Page]: currentPage == pageNumber
                  },
                  styles.page_Number
                )}
                onClick={e => {
                  onPageChanged(pageNumber); //передаем в контейнер и загружаем нужную страницу
                }}
              >
                {pageNumber}
              </span>
            </NavLink>
          );
        })}

      <NavLink
        onClick={e => {
          handleClickNext(e);
          onTop();
        }}
        to={`/categories/${category}/filter?${apiCategory}&startPage=${+currentPage +
          1}&perPage=${pageSize}`}
      >
        {portionCount > portionNumber &&
          currentPage > rightPortionPageNumber &&
          setPortionNumber(portionNumber + 1)}
        <span
          className={cn(
            {
              [styles.active]: +currentPage < +pagesCount
            },
            styles.unactive,
            styles.arrow,
            styles.next
          )}
        ></span>
      </NavLink>
      {/* <span style={{ margin: "40px" }}>
        товаров {productsQuantity} страниц {pagesCount}
      </span> */}
    </div>
  );
};
