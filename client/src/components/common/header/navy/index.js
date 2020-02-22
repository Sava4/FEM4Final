import React, { useState, useEffect } from "react";
// import {Link} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
// import store from "../../../../store"

import { HeaderMenuElem } from "./DropMenu";
import { getCategoriesList } from "../../../../store/headerMenu";

// import { addCategory} from "./DropMenu/newCategory"
// import {SimpleMenu} from "./HederMenu"

const mapStateToProps = store => ({
  categories: store
});

export const Navigation = connect(mapStateToProps, { getCategoriesList })(
  props => {
    console.log(props);
    const [categoriesAllData, setCategoriesAllData] = useState([]);

    useEffect(() => {
      // props.getCategoriesList()
      console.log(props);
      axios
        .get("http://localhost:5000/catalog")
        .then(result => {
          console.log("Secsess ");
          console.log(result.data);
          setCategoriesAllData(result.data);
        })
        .catch(err => {
          /*Do something with error, e.g. show error to user*/
        });
    }, [props]);
    console.log(categoriesAllData);
    // console.log(props.categories.categories)
    const categories = categoriesAllData && categoriesAllData;
    console.log(categories);

    let categArrey = categories.filter(item => item.parentId === "null");
    console.log(categArrey);

    return (
      <HeaderDropMenu>
        {/* <SimpleMenu categories={categories}></SimpleMenu> */}
        <HeaderMenuElem categoriesAllData={categoriesAllData} />
      </HeaderDropMenu>
    );
  }
);

const HeaderDropMenu = styled.div`
  padding: 0;
  font-family: Montserrat, sans-serif;
  display: flex;
  width: 71vw;
  justify-content: space-between;
`;
