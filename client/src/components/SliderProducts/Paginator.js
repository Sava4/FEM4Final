import React, { useState } from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";
import { NavLink } from "react-router-dom";

let Paginator = ({
  productsQuantity,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 5
}) => {
  console.log(currentPage);

  let pagesCount = Math.ceil(productsQuantity / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}

      {pages
        .filter(pageNumber => pageNumber >= leftPortionPageNumber && pageNumber <= rightPortionPageNumber)
        .map(pageNumber => {
          // console.log(pageNumber)
          return (
            <NavLink to={`/pagin/filter?startPage=${pageNumber}&perPage=${pageSize}`} key={pageNumber}>
            <span
              className={cn(
                {
                  [styles.selected_Page]: currentPage == pageNumber
                },
                styles.page_Number
              )}              
              onClick={e => {
                onPageChanged(pageNumber);//передаем в контейнер и загружаем нужную страницу
              }}
            >              
                {pageNumber}
                </span>
              </NavLink>
         
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;
