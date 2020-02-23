import React, { useEffect } from "react";

import styled from "styled-components";

import { connect } from "react-redux";

import { HeaderMenuElem } from "./DropMenu";
import { getCategoriesList } from "../../../../store/headerMenu";

const mapStateToProps = store => ({
  categories: store
});

export const Navigation = connect(mapStateToProps, { getCategoriesList })(
  props => {
    useEffect(() => {
      props.getCategoriesList();
    }, [props]);
    const categoriesAllData =
      props.categories.categories && props.categories.categories;
    return (
      <HeaderDropMenu>
        <HeaderMenuElem categoriesAllData={categoriesAllData} />
      </HeaderDropMenu>
    );
  }
);

const HeaderDropMenu = styled.div`
  padding: 0;
  font-family: Montserrat, sans-serif;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
