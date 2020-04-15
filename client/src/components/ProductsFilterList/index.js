import React, { useState, useLayoutEffect} from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router";
import { connect } from "react-redux";
import axios from "axios";
// import querystring from "query-string";
import { Layout } from "../common/Layout";
import { mediaMobile } from "../../styledComponents/MediaBreakpointsMixin";
import IconBreadcrumbs from "./Breadcrumbs.js";
import { FiltersList } from "./FilterBar/FiltersList";
import {setAvaliFilters} from "../../store/filters";
import { MobileFiltersList } from "./FilterBar/MobileFiltersList";
import { FilterIndicators } from "./SelectedProducts/FilterIndicators";
import { FilteredListProducts } from "./FilteredProducts";
import ProductsContainer from "./../SliderProducts/ProductsContainer";

// import querystring from "query-string";
const MapStateToProps = store => ({
  filters: store.filters.selFilters
});

export const ProductFilters = connect(MapStateToProps, {setAvaliFilters})(
  props => {
  const { category } = useParams();
  const [nambertOfFilteredItems, setNambertOfFilteredItems] = useState(0);
  const [openFiltwin, setOpenFiltwilnd] = useState(false);

  useLayoutEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then(result => {
        props.setAvaliFilters(result.data);

      })
      // .then(products => {
      //   setProducts (collectionList(products))

      // })
      .catch(err => {
        /*Do something with error, e.g. show error to user*/
      });
  }, []);

  return (
    <Layout>
      <CategoriesHeader>
        <p>{category}</p>
      </CategoriesHeader>

      <IconBreadcrumbs categoryName={category} />

      <CategotiesCommon>

      {window.innerWidth<767 ? (
    <MobileCategoriesFilters>
        <p onClick={() => setOpenFiltwilnd(true)}>FILTER BY</p>
        {openFiltwin && (
          <MobileFiltersList setOpenFiltwilnd={setOpenFiltwilnd} />
        )}
      </MobileCategoriesFilters>
    ):
    (
        <CategoriesFilters>
          <p>FILTER BY</p>
          <FiltersList />
        </CategoriesFilters>
    )}

        <SelectedProducts>
          <p>{`Selected products ( ${nambertOfFilteredItems} )`}</p>
          <FilterIndicators />
          {/* <FilteredListProducts
            category={category}
            setNambertOfFilteredItems={setNambertOfFilteredItems}
          />          */}
        </SelectedProducts>
        <ProductsContainer/>
      </CategotiesCommon >
    </Layout>
  );
}
)
;

const CategoriesHeader = styled.div`
  background-color: black;
  width: 100vw;
  height: 250px;
  position: relative;
  & p {
    font-size: 40px;
    color: white;
    text-transform: uppercase;
    position: absolute;
    margin: 0;
    left: 129px;
    bottom: 111px;
  }
`;
const CategotiesCommon = styled.div`
  display: flex;
  flex-wrap: nowrap;
  ${mediaMobile(`
  flex-direction:column;
`)}
`;
const MobileCategoriesFilters = styled.div`
  display: none;
  flex-wrap: wrap;
  ${mediaMobile(`
display: block;
// flex-direction:column;
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
  margin-top: 29px;
  margin-left: 5%;
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
  & >p {
    font-size: 17px;
    margin-top: 28px;
    text-transform: uppercase;
    margin-bottom: 23px;
    ${mediaMobile(`
      text-align:left;
      // margin: 0;
      margin-bottom: 23px;
      // margin-top: -45px;
      margin-right: 21px;

      `)}
  }
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
