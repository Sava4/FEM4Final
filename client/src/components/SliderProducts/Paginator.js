import React, { useState } from "react";
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
  categoryQuery,
  category,
  category2,
  portionSize = 1, //количество страниц в порции
}) => {
  let pagesCount = Math.ceil(productsQuantity / pageSize); //количество страниц всего и номер последней страницы

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let apiCategory2;
  apiCategory && (apiCategory2 = apiCategory);

  let portionCount = Math.ceil(pagesCount / portionSize); // количество порций
  let [portionNumber, setPortionNumber] = useState(1); // номер порции начальный локальный стейт

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1; //крайняя цифра порции слева
  let rightPortionPageNumber = portionNumber * portionSize; //крайняя цифра порции справа

  const handleClickNext = (e) => {
    +currentPage == +pagesCount && e.preventDefault();
  };
  const handleClickPrev = (e) => {
    +currentPage <= 1 && e.preventDefault();
  };

  return (
    <div className={styles.paginator}>
      {info == 1 && (
        <span style={{ margin: "40px" }}>
          ProductsQuantity {productsQuantity} Pages {pagesCount}
        </span>
      )}

      {/* prev стрелка < */}
      <NavLink
        onClick={(e) => {
          handleClickPrev(e);
          onTop(450);
          onPageChanged(+currentPage - 1);
        }}
        // to={(category===undefined)&&`/products/${category='all'}/filter?${categoryQuery}&startPage=${+currentPage -
        //   1}&perPage=${pageSize}`}

        to={`/categories/${category}/filter?${categoryQuery}${category2}&startPage=${+currentPage -
          1}&perPage=${pageSize}`}
      >
        {portionNumber > 1 &&
          currentPage < leftPortionPageNumber &&
          setPortionNumber(portionNumber - 1)}
        <span
          className={cn(
            {
              [styles.active]: currentPage > 1,
            },
            styles.unactive,
            styles.arrow,
            styles.prev
          )}
        ></span>
      </NavLink>

      {/* первая страница */}
      <NavLink
        to={`/categories/${category}/filter?${categoryQuery}${category2}&startPage=${pagesCount}&perPage=${pageSize}`}
        onClick={(e) => {
          onTop(450);
        }}
      >
        <span
          className={cn(
            {
              [styles.removed]: currentPage <= "2",
              [styles.added]: currentPage <= "2",
            },
            styles.page_Number
          )}
          onClick={(e) => {
            onPageChanged("1"); //передаем в контейнер и загружаем нужную страницу
          }}
        >
          {1}
        </span>
      </NavLink>

      {/* три точки ... */}
      <NavLink
        to={`/categories/${category}/filter?${categoryQuery}${category2}&startPage=${currentPage -
          2}&perPage=${pageSize}`}
        onClick={(e) => {
          onTop(450);
        }}
      >
        <span
          className={cn(
            {
              [styles.removed]: currentPage <= "3",
              // [styles.added]: currentPage <='3',
            },
            styles.page_Number
          )}
          onClick={(e) => {
            onPageChanged(currentPage - 3); //передаем в контейнер и загружаем нужную страницу
          }}
        >
          . .
        </span>
      </NavLink>

      {/* обычные страницы */}
      {pages
        .filter(
          (pageNumber) =>
            pageNumber + 1 >= leftPortionPageNumber &&
            pageNumber - 1 <= rightPortionPageNumber
        )
        .map((pageNumber) => {
          return (
            <NavLink
              to={
                (category === undefined &&
                  category === "filter" &&
                  `/categories/${category}/filter?${categoryQuery}${category2}&startPage=${pageNumber}&perPage=${pageSize}`) ||
                (category !== undefined &&
                  category !== "filter" &&
                  `/categories/${category}/filter?${categoryQuery}${category2}&startPage=${pageNumber}&perPage=${pageSize}`)
              }
              key={pageNumber}
              onClick={(e) => {
                onTop(450);
              }}
            >
              {portionNumber > 1 &&
                currentPage < leftPortionPageNumber &&
                setPortionNumber(portionNumber - 1)}
              {portionCount > portionNumber &&
                currentPage > rightPortionPageNumber &&
                setPortionNumber(portionNumber + 1)}
              <span
                className={cn(
                  {
                    [styles.selected_Page]: currentPage == pageNumber,
                  },
                  styles.page_Number
                )}
                onClick={(e) => {
                  onPageChanged(pageNumber); //передаем в контейнер и загружаем нужную страницу
                }}
              >
                {pageNumber}
              </span>
            </NavLink>
          );
        })}

      {/* три точки ... */}
      <NavLink
        to={`/categories/${category}/filter?${categoryQuery}${category2}&startPage=${currentPage +
          3}&perPage=${pageSize}`}
        onClick={(e) => {
          onTop(450);
        }}
      >
        <span
          className={cn(
            {
              [styles.removed]: currentPage >= pagesCount - 2,
              // [styles.added]: currentPage <='3',
            },
            styles.page_Number
          )}
          onClick={(e) => {
            onPageChanged(currentPage + 2); //передаем в контейнер и загружаем нужную страницу
          }}
        >
          . .
        </span>
      </NavLink>
      {/* последняя страница */}
      <NavLink
        to={`/categories/${category}/filter?${categoryQuery}${category2}&startPage=${pagesCount}&perPage=${pageSize}`}
        onClick={(e) => {
          onTop(450);
        }}
      >
        <span
          className={cn(
            {
              [styles.removed]: currentPage >= pagesCount - 1,
            },
            styles.page_Number
            // styles.unactive
          )}
          onClick={(e) => {
            onPageChanged(pagesCount); //передаем в контейнер и загружаем нужную страницу
          }}
        >
          {pagesCount}
        </span>
      </NavLink>

      {/* next стрелка > */}
      <NavLink
        onClick={(e) => {
          handleClickNext(e);
          onTop(450);
          onPageChanged(+currentPage + 1);
        }}
        // to={(category===undefined)&&(category='')&&`/products/${category}/filter?${categoryQuery}&startPage=${+currentPage -
        //   1}&perPage=${pageSize}`}

        to={`/categories/${category}/filter?${categoryQuery}${category2}&startPage=${+currentPage +
          1}&perPage=${pageSize}`}
      >
        {portionCount > portionNumber &&
          currentPage > rightPortionPageNumber &&
          setPortionNumber(portionNumber + 1)}
        <span
          className={cn(
            {
              [styles.active]: +currentPage < +pagesCount,
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
