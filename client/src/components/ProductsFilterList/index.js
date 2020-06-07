import React, { useState, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import querystring from "query-string";
import { Layout } from "../common/Layout";
import { mediaMobile } from "../../styledComponents/MediaBreakpointsMixin";
import IconBreadcrumbs from "./Breadcrumbs.js";
import { FiltersList } from "./FilterBar/FiltersList";
import {
  setAvaliFilters,
  setPriceRange,
  dispatchSetCheckFilter,
  setClearFilters
} from "../../store/filters";
import { MobileFiltersList } from "./FilterBar/MobileFiltersList";
import { FilterIndicators } from "./SelectedProducts/FilterIndicators";
import { Button } from "../common/Button/Button";
import { SortedbyPopup } from "./SortedbyPopup";
import { FilteredListProducts } from "./FilteredProducts";
import ProductsContainer from "./../SliderProducts/ProductsContainer";
import earrings from "./images/earrings.png";
import bracelets from "./images/bacelets.png";
import rings from "./images/rings.png";
import necklaces from "./images/necklaces.png";
import dropArrow from "./images/DroppArrow.png";

export const ProductFilters = props => {
  const { homepagecategory } = useParams();
  const { chosenMenu } = useParams();
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters.selFilters);
  const availFilters = useSelector(state => state.filters.availFilters);
  const selectedProd = useSelector(
    state => state.productsPage.productsQuantity
  );
  const priceFilters = useSelector(state => state.filters.priceRange);
  // const category = (!!homepagecategory) ? chosenMenu : homepagecategory.replace("homepage", "");
  const category = !!homepagecategory ? homepagecategory : chosenMenu;

  const [openFiltwin, setOpenFiltwind] = useState(false);
  const [isOpenSortedPopup, setIsOpenSortedPopup] = useState(false);
  const [availCategories, setAvailCategories] = useState ([]);
  const [queryCategory, setQueryCategory] = useState("");
  const [breadcrumbsCategory, setBreadcrumbsCategory]=useState("")
  const [sortType, setSortType] = useState("");
  const initialPriceValue = { min: 0, max: 200000 };

  console.log(homepagecategory, chosenMenu, category)
  const filtredBy = [
    "price",
    "collection",
    "metal",
    "metal_color",
    "gemstone",
    "gemstone_color"
  ];

  useLayoutEffect(() => {         
    dispatch(setPriceRange(initialPriceValue));

    const url = `/products`;
    axios.get(url).then(result => {
      let typesAll = result.data.map(({ categories }) => {
        return categories;
      });
      
      const unification = arreyForUnif => Array.from(new Set(arreyForUnif));
      // console.log(result.data)
      setAvailCategories(unification(typesAll));
      const filterCheck = categoryName => {
        if (
          unification(typesAll).filter(it => it === categoryName.toLowerCase())
            .length
        ) {
          console.log("категория из вариантов")
          setQueryCategory(`&categories=${categoryName}`);
          dispatch(setAvaliFilters(result.data.filter(({categories})=>categories ===categoryName)));
          setBreadcrumbsCategory(categoryName)

        } else {
          // console.log("Коллекции")
          dispatch(setAvaliFilters(result.data));
          dispatch(dispatchSetCheckFilter({ collection: categoryName }));
          setQueryCategory("");
          setBreadcrumbsCategory("")
        }
      };
      category && filterCheck(category);
    });
  }, [category]);

  const query = querystring.stringify(filters, { arrayFormat: "comma" });
  const querySort =
    sortType &&
    (sortType === "price Increase"
      ? "&sort=+currentPrice"
      : "&sort=-currentPrice");
  const commonSort = `${query ? "&" : ""}minPrice=${
    priceFilters.lowPriсe
  }&maxPrice=${priceFilters.hightPrice}${querySort}`;

  const selectAction = e => {
    setSortType(e.target.value);
  };

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
  }, [query, commonSort, queryCategory, sortType]);

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
      {window.innerWidth < 767 ? null : (
        <IconBreadcrumbs categoryName={breadcrumbsCategory} />
      )}
      <CategotiesCommon>
        {window.innerWidth < 767 ? (
          <MobileCategoriesFilters>
            <p onClick={() => setOpenFiltwind(true)}>FILTER BY</p>
            <div>
              <p onClick={() => setIsOpenSortedPopup(!isOpenSortedPopup)}>
                SORTED BY
              </p>
              {isOpenSortedPopup ? (
                <SortedbyPopup
                  setSortType={setSortType}
                  setIsOpenSortedPopup={setIsOpenSortedPopup}
                  sortType={sortType}
                />
              ) : (
                <p onClick={() => setIsOpenSortedPopup(!isOpenSortedPopup)}>
                  {sortType ? sortType.toLowerCase() : "choose sorting type"}
                </p>
              )}
            </div>
            {openFiltwin && (
              <MobileFiltersList
                filtredBy={filtredBy}
                setOpenFiltwind={setOpenFiltwind}
              />
            )}
          </MobileCategoriesFilters>
        ) : (
          <CategoriesFilters>
            <p>FILTER BY</p>
            <FiltersList filtredBy={filtredBy} />
            <ButtonSection>
              <Button
                onClick={() => dispatch(setClearFilters())}
                value={"CLEAR ALL"}
                width={"168px"}
              />
            </ButtonSection>
          </CategoriesFilters>
        )}

        <SelectedProducts>
          <SelectedProductsHeader>
            <p>{`Selected products (${selectedProd})`}</p>
            <SortSection>
              <p>SORTED BY</p>
              <StyledSelect onChange={selectAction} defaultValue="Choose">
                <option value="priceIncrease">Price increase</option>
                <option value="priceDecrease">Price decrease</option>
              </StyledSelect>
            </SortSection>
          </SelectedProductsHeader>
          <FilterIndicators />
          {/* <FilteredListProducts category={category} /> */}
          <ProductsContainer />
        </SelectedProducts>
      </CategotiesCommon>
    </Layout>
  );
};
// );

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
  }
`;
const CategoriesHeaderImg = styled.div`
  background-image: url(${props => props.categoryName});
  height: inherit;
  width: 668px;
  background-repeat: no-repeat;
  ${mediaMobile(`
  background-image: none;
  `)}
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

const ButtonSection = styled.div`
  margin: 20px auto;
  width: fit-content;
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
  & >div{    
    font-size: 17px;
    margin-left: 20px;
    margin-top: 18px;
    margin-bottom: 20px;
    width:fit-content;
    cursor: pointer;
    >p{
      text-align:right;
    }
    p:last-child{
      font-size: 14px;
      line-height:20px;
    } 
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
  ${mediaMobile(`;
     display:none;     
    `)}
`;
const SortSection = styled.div`
  display: flex;
  align-items: end;
  & > p {
    font-family: Old Standard TT;
    font-size: 17px;
    text-transform: uppercase;
  }
`;
const StyledSelect = styled.select`
  font-family: Montserrat;
  border: none;
  margin-left: 25px;
  appearance: none;
  background: url(${dropArrow}) no-repeat right center;
  min-width: 115px;
  outline: 0;
  input[type="select"]:focus {
    border: none;
  }
`;
