import React from "react";
import styled from "styled-components";
import { useParams } from "react-router";

import { Layout } from "../common/Layout";
import IconBreadcrumbs from "./Breadcrumbs.js";
import { FiltersList } from "./FilterBar/FiltersList";
// import { Checkboxes } from "./FilterBar/PopupCheckboxes";
import { FilterIndicators } from "./SelectedProducts/FilterIndicators";
import { FilteredListProducts } from "./FilteredProducts";

export const HeaderProductFilters = () => {
  const { parentmMenu, chosenMenu } = useParams();

  return (
    <Layout>
      <CategoriesHeader>
        <p>
          {parentmMenu}/{chosenMenu}
        </p>
      </CategoriesHeader>

      <IconBreadcrumbs></IconBreadcrumbs>

      <CategotiesCommon>
        <CategoriesFilters>
          <h3>FILTER BY</h3>
          <FiltersList />
        </CategoriesFilters>

        <SelectedProducts>
          <h3>Selected products</h3>
          <FilterIndicators />
          <FilteredListProducts
            filtPapams={(parentmMenu, chosenMenu)}
          ></FilteredListProducts>
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
`;
const CategoriesFilters = styled.div`
  margin-left: 130px;
  min-width: 280px;

  width: 30%;
  & p {
    font-size: 17px;
  }
`;
const SelectedProducts = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
