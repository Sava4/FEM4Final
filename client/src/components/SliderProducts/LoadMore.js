
import styles from "./Paginator.module.css";
import cn from "classnames";
import React, { useEffect } from 'react';
import { useRouter } from 'state';

export const LoadMore = ({
  currentPage,
  productsQuantity,
  pageSize,
  onLoadMore,
  products, 
  parsed,  
  ...props
}) => {
  //   async function q(){
  //     (+currentPage<4)&&( onLoadMore(+currentPage + 1) )
  //  const el = await document.getElementById(`${products.length}`)
  //  (+currentPage<4)&&(el.scrollIntoView({behavior:"smooth"}))
  // }

  return (
    <div className={cn({
        [styles.active]: +currentPage <(productsQuantity/pageSize)
      },        
        styles.load_more,
        styles.unactive,
        )}     
        onClick={e => {
        // q()
        +currentPage <(productsQuantity/pageSize) && onLoadMore(+currentPage + 1); //передаем в контейнер и загружаем нужную страницу
        setTimeout(function() {
          const el = document.getElementById(`${products.length}`);
          +currentPage <(productsQuantity/pageSize) && el.scrollIntoView({ behavior: "smooth" });
        }, 3000);
      }}
    >
      loadmore
    </div>
  );
};

export const ScrollToTopControlller = (props) => {
 let parsed=props.parsed
 console.log(parsed)
useEffect(() => () => { // <-- Now we return the useEffect teardown effect, which will be fired only after the path/search change for the first time
  try {
    // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  } catch (error) {
    // just a fallback for older browsers
    window.scrollTo(0, 0);
  }
}, [parsed]);
return (
  // null
      <div onClick={e => {}}>
  TOTOP
      </div>
    );
  };
