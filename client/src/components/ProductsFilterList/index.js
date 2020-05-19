import React, { useState, useLayoutEffect , useEffect} from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router";
import { connect } from "react-redux";
import axios from "axios";
// import querystring from "query-string";
import querystring from "query-string";
import { Layout } from "../common/Layout";
import { mediaMobile } from "../../styledComponents/MediaBreakpointsMixin";
import IconBreadcrumbs from "./Breadcrumbs.js";
import { FiltersList } from "./FilterBar/FiltersList";
import {
  setAvaliFilters,
  setPriceRange,
  dispatchSetCheckFilter
} from "../../store/filters";
import { MobileFiltersList } from "./FilterBar/MobileFiltersList";
import { FilterIndicators } from "./SelectedProducts/FilterIndicators";
import { FilteredListProducts } from "./FilteredProducts";
import ProductsContainer from "./../SliderProducts/ProductsContainer";
import earrings from "./images/earrings.png";
import bracelets from "./images/bacelets.png";
import rings from "./images/rings.png";
import necklaces from "./images/necklaces.png";
import dropArrow from "./images/DroppArrow.png"
const MapStateToProps = store => ({
  filters: store.filters.selFilters,
  selectedProd: store.productsPage.productsQuantity,
  priceFilters: store.filters.priceRange
});

export const ProductFilters = connect(MapStateToProps, {
  setAvaliFilters,
  setPriceRange,
  dispatchSetCheckFilter
})(props => {
  const { homepagecategory } = useParams();

  const { chosenMenu } = useParams();
  // console.log(chosenMenu, homepagecategory);
  const category = homepagecategory ? homepagecategory.replace("homepage", "")
                                    : chosenMenu;

  const [openFiltwin, setOpenFiltwilnd] = useState(false);
  const [queryCategory, setQueryCategory] = useState("");
  const [sortType, setSortType] = useState("");
  const initialPriceValue = {
    min: 0,
    max: 200000
  };

  useLayoutEffect(() => {
    axios
      .get("/products")
      .then(result => {
        props.setAvaliFilters(result.data);
      })
      // .then(products => {
      //   setProducts (collectionList(products))

      // })
      .catch(err => {
        /*Do something with error, e.g. show error to user*/
      });
    props.setPriceRange(initialPriceValue);

    //for products list
    let typesAll = [];
    const url = `/products`;
    axios.get(url).then(result => {
      result.data.forEach(item => typesAll.push(item.categories));
      const unification = () => Array.from(new Set(typesAll));
      // console.log(result.data)
        const filterCheck =category &&  (categoryName => {
   
          if (unification().filter(it => it===categoryName.toLowerCase()).length) {
            // console.log("категория из вариантов")
            setQueryCategory (`&categories=${categoryName}`)
          }
          else {
        // console.log("Коллекции")
            props.dispatchSetCheckFilter({collection:categoryName });
            setQueryCategory("");

          }
        })

       filterCheck(category)
    });
  }, [category]);

  const query = querystring.stringify(props.filters,  { arrayFormat: "comma" });
  const querySort =sortType && ((sortType==="priceIncrease") ? ("&sort=+currentPrice") : ("&sort=-currentPrice")); 
  const commonSort = `${query ? "&" : ""}minPrice=${props.priceFilters.lowPriсe}&maxPrice=${props.priceFilters.hightPrice}${querySort}`;

  console.log(querySort)

  const selectAction = (e) =>{      
    setSortType(e.target.value)
  }

  

  useEffect(() => {    
    const filterUrl = `/products/filter?${queryCategory}&${query}${commonSort}`;
    console.log(filterUrl);
    
    // axios.get(filterUrl).then(result => {
    //   console.log(result.data)
      // setProducts(result.data);
    // });
    //   .catch(err => {
    //     /*Do something with error, e.g. show error to user*/
    //   });
    // }
  }, [query, commonSort, queryCategory,sortType]);

  const background = name => {
    switch (name) {
      case "earrings": {
        return earrings;
      }
      case "necklaces": {
        return necklaces;
      }
      case "bracelets": {
        return bracelets;
      }
      case "rings": {
        return rings;
      }
      default:
        return null;
    }
  };

  return (
    <Layout>
      <CategoriesHeader>
        <p>{category}</p>
        <CategoriesHeaderImg categoryName={background(category)} />
      </CategoriesHeader>
      {window.innerWidth < 767 ? null : <IconBreadcrumbs categoryName={category}/>}
      <CategotiesCommon>
        {window.innerWidth < 767 ? (
          <MobileCategoriesFilters>
            <p onClick={() => setOpenFiltwilnd(true)}>FILTER BY</p>
            <p>SORTED BY</p>
            {openFiltwin && (
              <MobileFiltersList setOpenFiltwilnd={setOpenFiltwilnd} />
            )}
          </MobileCategoriesFilters>
        ) : (
          <CategoriesFilters>
            <p>FILTER BY</p>
            <FiltersList />
          </CategoriesFilters>
        )}

        <SelectedProducts>
          <SelectedProductsHeader>
            <p>{`Selected products (${props.selectedProd})`}</p>
            <SortSection>
              <p>SORTED BY</p>
              <StyledSelect 
              onChange={selectAction}
              defaultValue = "Choose">                
                <option value="priceIncrease">Price increase</option>
                <option value="priceDecrease">Price decrease</option>
              </StyledSelect> 
            </SortSection>
            
          </SelectedProductsHeader>          
          <FilterIndicators />
          <FilteredListProducts category={category}/>         
          {/* <ProductsContainer /> */}
        </SelectedProducts>
      </CategotiesCommon>
    </Layout>
  );
});

const CategoriesHeader = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 250px;
  & p {
    font-size: 40px;
    color: white;
    text-transform: uppercase;   
    padding-left: 111px;
    padding-top: 120px;
 ;
  }
`;
const CategoriesHeaderImg = styled.div`
  background-image: url(${props => props.categoryName});
  height: inherit;
  width: 668px;
  background-repeat: no-repeat;
`;
const CategotiesCommon = styled.div`
  margin: 29px 130px;
  display: flex;
  flex-wrap: nowrap;
  ${mediaMobile(`
  flex-direction:column;
  margin: 18px 20px;
`)}
`;
const MobileCategoriesFilters = styled.div`
  font-family: Old Standard TT;
  display: none; 
  ${mediaMobile(`
  display: flex;
  justify-content: space-between;

  & > p {
    font-size: 17px;
    margin-left: 20px;
    margin-top: 18px;
    margin-bottom: 20px;
    width:fit-content;
    cursor: pointer;
  }
`)}
`;
const CategoriesFilters = styled.div`
  font-family: Old Standard TT;
  width: 25%;
  min-width: 200px;
  max-width: 260px;
  & p {
    font-size: 17px;
    margin-bottom: 22px;
  }
  ${mediaMobile(`
  display:none;
  `)}
`;

const SelectedProducts = styled.div`
  width: 100%;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
 
`;

const SelectedProductsHeader = styled.div`
display: flex;
justify-content: space-between;
& > p {
  font-family: Old Standard TT;
  font-size: 17px;    
  text-transform: uppercase;
  margin-bottom: 23px;
  }
  ${mediaMobile(`
    // text-align:left;
    // margin-bottom: 23px;   
    // margin-right: 21px;
     display:none; 
    // & > p {      
    // }
    `)}
`
const SortSection = styled.div`
display: flex;
align-items: end;
& > p {
  font-family: Old Standard TT;
  font-size: 17px;    
  text-transform: uppercase;
}
`
const StyledSelect = styled.select`
font-family: Montserrat;
border: none;
margin-left:25px;
appearance: none;
background: url(${dropArrow}) no-repeat right center;
width: 120px;
outline: 0;
input[type=select]:focus {
  border: none;
}

`    
