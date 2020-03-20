import React, { useState } from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";
import { NavLink } from "react-router-dom";

let Paginator = ({
  productsQuantity,
  pageSize,
  currentPage,
  onPageChanged,
  onLoadMore,
  portionSize = 5 //количество страниц в порции
}) => {
  console.log(currentPage);

  let pagesCount = Math.ceil(productsQuantity / pageSize); //количество страниц всего

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize); // количество порций
  let [portionNumber, setPortionNumber] = useState(1); // номер порции начальный локальный стейт
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>    
      <NavLink
        to={`/pagin/filter?startPage=${+currentPage-1}&perPage=${pageSize}`}
      >
         {portionNumber > 1 && currentPage < leftPortionPageNumber && (      
            setPortionNumber(portionNumber - 1)       
      )}
       {+currentPage > 1 && <span>prev</span>}
      </NavLink>
      {pages
        .filter(
          pageNumber =>
            pageNumber >= leftPortionPageNumber &&
            pageNumber <= rightPortionPageNumber
        )
        .map(pageNumber => {
          // console.log(pageNumber)
          return (
            <NavLink
              to={`/pagin/filter?startPage=${pageNumber}&perPage=${pageSize}`}
              key={pageNumber}
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
        to={`/pagin/filter?startPage=${+currentPage + 1}&perPage=${pageSize}`}
      >
        {portionCount > portionNumber &&
          currentPage > rightPortionPageNumber &&
          setPortionNumber(portionNumber + 1)}
           {+currentPage < +pagesCount && <span>next</span>}        
      </NavLink>
      <span style={{margin:"20px"}}>Всего товаров {productsQuantity}</span>
      <span onClick={e => {
                  onLoadMore(6); //передаем в контейнер и загружаем нужную страницу
                }}>loadmore</span>

    </div>
  );
};

export default Paginator;
