import React, { useState } from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";
import { NavLink } from "react-router-dom";

export const  Paginator = ({
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
 
 const handleClickNext = (e) => {
    currentPage==pagesCount && e.preventDefault()     
}
 const handleClickPrev = (e) => {
   currentPage == 1 && e.preventDefault() 
 }
  return (
    <div className={styles.paginator}>
      <NavLink onClick={handleClickPrev}
        to={`/pagin/filter?startPage=${+currentPage - 1}&perPage=${pageSize}`}
      >
        {portionNumber > 1 &&
          currentPage < leftPortionPageNumber &&
          setPortionNumber(portionNumber - 1)}
        {/* {+currentPage > 1 && <span className={styles.prev}>prev</span>} */}
        <span className={cn({
          [styles.active]: currentPage >1
        },          
          styles.prev
          )}>prev</span>
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
        
      <NavLink onClick={handleClickNext} 
        to={`/pagin/filter?startPage=${+currentPage+1}&perPage=${pageSize}`}
      >
        {portionCount > portionNumber &&
          currentPage > rightPortionPageNumber &&
          setPortionNumber(portionNumber + 1)}
        {/* {+currentPage < +pagesCount && <span>next</span>} */}
          <span className={cn({
          [styles.active]: +currentPage < +pagesCount
        },          
          styles.prev
          )}>next</span>
      </NavLink>
      <span style={{ margin: "20px" }}>Всего товаров {productsQuantity}
      </span>
{/*    
        <span
          onClick={e => {
            onLoadMore(+currentPage + 1); //передаем в контейнер и загружаем нужную страницу
          }}
        >
          loadmore
        </span> */}
     
    </div>
  );
};

// export default Paginator;
