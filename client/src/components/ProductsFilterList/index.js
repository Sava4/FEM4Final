import React, { useState } from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router";

import { Layout } from "../common/Layout";
import { mediaMobile } from "../../styledComponents/MediaBreakpointsMixin";
import IconBreadcrumbs from "./Breadcrumbs.js";
import { FiltersList } from "./FilterBar/FiltersList";
import { MobileFiltersList } from "./FilterBar/MobileFiltersList";
import { FilterIndicators } from "./SelectedProducts/FilterIndicators";
import { FilteredListProducts } from "./FilteredProducts";
import ProductsContainer from "./../SliderProducts/ProductsContainer";
import querystring from "query-string";

export const ProductFilters = props => {
  const { category } = useParams();
  const [nambertOfFilterdItems, setNambertOfFilterdItems] = useState(0);
  const [openFiltwin, setOpenFiltwilnd] = useState(true);

  let location = useLocation();
  let path = `filter${location.search}`;
  console.log("TCL: ProductFilters -> path", path);

  return (
    <Layout>
      <CategoriesHeader>
        <p>{category}</p>
      </CategoriesHeader>

      <IconBreadcrumbs categoryName={category} />

      <MobileCategotiesCommon>
        <p onClick={() => setOpenFiltwilnd(true)}>FILTER BY</p>
        {openFiltwin && (
          <MobileFiltersList setOpenFiltwilnd={setOpenFiltwilnd} />
        )}
      </MobileCategotiesCommon>

      <CategotiesCommon>
        <CategoriesFilters>
          <p>FILTER BY</p>
          <FiltersList />
        </CategoriesFilters>

        <SelectedProducts>
          <p>{`Selected products ( ${nambertOfFilterdItems} )`}</p>
          <FilterIndicators />
          <FilteredListProducts
            category={category}
            setNambertOfFilterdItems={setNambertOfFilterdItems}
          />
          {/* <FilteredListProducts category={category} /> */}
        </SelectedProducts>
        <ProductsContainer />
      </CategotiesCommon>
    </Layout>
  );
};

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
const MobileCategotiesCommon = styled.div`
  display: none;
  flex-wrap: nowrap;
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
  margin-left: 130px;
  min-width: 280px;
  width: 30%;
  & p {
    font-size: 17px;
    margin-bottom: 22px;
  }
  ${mediaMobile(`
  display:none;
    // height: fit-content;
    // margin-left: 20px;
    // & p {
      
    // }
`)}
`;

const SelectedProducts = styled.div`
  & > p {
    font-size: 17px;
    margin-top: 28px;
    text-transform: uppercase;
    margin-bottom: 23px;
    ${mediaMobile(`
      text-align:left;
      margin: 0;
      // margin-top: -45px;
      margin-right: 21px;

      `)}
  }
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
