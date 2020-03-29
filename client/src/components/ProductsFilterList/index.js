import React from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { Layout } from "../common/Layout";
import { mediaMobile } from "../../styled-components/media-breakpoints-mixin";
import IconBreadcrumbs from "./Breadcrumbs.js";
import { FiltersList } from "./FilterBar/FiltersList";
// import { Checkboxes } from "./FilterBar/PopupCheckboxes";
import { FilterIndicators } from "./SelectedProducts/FilterIndicators";
import { FilteredListProducts } from "./FilteredProducts";

export const ProductFilters = () => {
  const { category } = useParams();

  return (
    <Layout>
      <CategoriesHeader>
        <p>{category}</p>
      </CategoriesHeader>

      <IconBreadcrumbs categoryName={{ category }} />

      <CategotiesCommon>
          <CategoriesFilters>
              <FiltersbarHead>FILTER BY </FiltersbarHead>
              <FiltersbarHeadMob>FILTER BY </FiltersbarHeadMob>
            <FiltersList />
        </CategoriesFilters>

        <SelectedProducts>
          <p>Selected products</p>     
            <FilterIndicators />
            <FilteredListProducts category={category} />         
        </SelectedProducts>
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
const CategoriesFilters = styled.div`
  margin-top: 29px;
  margin-left: 130px;
  min-width: 280px;
  width: 30%;
  ${mediaMobile(`
    height: fit-content;
    margin-left: 20px;
`)}
  // & > p {
  //   font-size: 17px;
  //   margin-bottom: 54px;
  //     ${mediaMobile(`
  //       margin-bottom: 11px;
  //       width:fit-content;
  //     `)}
`;
const FiltersbarHead = styled.p`
font-size: 17px;
margin-bottom: 54px;
  ${mediaMobile(`
   display:none;
  `)}
`;
const FiltersbarHeadMob = styled.p`
  display::none;
  ${mediaMobile(`
    font-size: 17px;
    margin-bottom: 54px;
    margin-bottom: 11px;
    width:fit-content;
    cursor: pointer;
  `)}
`;
const SelectedProducts = styled.div`
  & > p {
    font-size: 17px;
    margin-top: 28px;
    text-transform: uppercase;
    margin-bottom: 23px;
    ${mediaMobile(`
      text-align:right;
      margin: 0;
      margin-top: -27px;
      margin-right: 21px;

      `)}
  
  }
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
