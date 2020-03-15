import React, { useState } from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";
import { useParams, useLocation } from "react-router";
import { NavLink } from "react-router-dom";

let Paginator = ({
  productsQuantity,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10
}) => {
  //   let {string} = `filter?startPage=${currentPage}&perPage=${pageSize}`
  //   string = useParams();
  //   console.log(string)
  let location = useLocation();
  let path = `filter${location.search}`;
  console.log(location);
  console.log(path);
  // useParams(props);
  //  pageSize = useParams();

  //   let {string} = `filter?startPage=${currentPage}&perPage=${pageSize}`;
  //   console.log(string)
  //   string = useParams();

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
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
          return (
            <span
              className={cn(
                {
                  [styles.selectedPage]: currentPage === p
                },
                styles.pageNumber
              )}
              key={p}
              onClick={e => {
                onPageChanged(p);
              }}
            >
              {" "}
              <NavLink to={`/pagin/filter?startPage=${p}&perPage=${pageSize}`}>
                {p}
              </NavLink>
            </span>
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
