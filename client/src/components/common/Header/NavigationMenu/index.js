import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";

import { connect } from "react-redux";
import { HeaderMenuElem } from "./DropMenu";
import { getCategoriesList } from "../../../../store/headerMenu";

const mapStateToProps = store => ({
  categories: store
});

export const Navigation = connect(mapStateToProps, { getCategoriesList })(
  props => {
    const [categoriesAllData, setCategoriesAllData] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:5000/catalog")
        .then(result => {
          setCategoriesAllData(result.data);
        })
        .catch(err => {});
    }, []);

    return (
      <HeaderDropMenu>
        <HeaderMenuElem categoriesAllData={categoriesAllData} />
      </HeaderDropMenu>
    );
  }
);

const HeaderDropMenu = styled.div``;
