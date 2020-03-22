import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { v4 } from "uuid";

import styled from "styled-components";

import { dispatchSetCheckFilter, setDeleteFilter } from "../../../store/filters";


const mapStateToProps = store => ({
  filters: store.filters.selFilters
});

export const PopupCheckboxes = connect(mapStateToProps, {
  dispatchSetCheckFilter, setDeleteFilter
})(props => {
  const { filtername } = props;

  const checkedFromStor = props.filters[filtername];

  const [products, setProducts] = useState([]);

  const filter = (innerArrey, filterType) => {
    const collections = [];

    innerArrey.forEach(
      item =>
        !collections.includes(item[filterType]) &&
        collections.push(item[filterType])
    );

    return collections;
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then(result => {
          setProducts(result.data);
      })
      // .then(products => {
      //   setProducts (collectionList(products))

      // })
      .catch(err => {
        /*Do something with error, e.g. show error to user*/
      });
  }, []);

  const checkedFilters = e => {
    e.preventDefault();
    if (e.target.checked)
     {
     const remoteFilterCategory = e.target.className;
     const remoteFilterName = e.target.value;
       let delEll = {};
      delEll[remoteFilterCategory] = remoteFilterName;
    props.setDeleteFilter(delEll);
    e.target.checked = false;
    }
    else {
       const activeFilters = {};
      activeFilters[e.target.className] = e.target.value;
      props.dispatchSetCheckFilter(activeFilters);
    }                            

  };

  const setCheckBox = (e) =>{
        e.preventDefault();
//       const remoteFilterCategory = e.target.className;
//       const remoteFilterName = e.target.value;

// // console.log(remoteFilterCategory)


//          let delEll = {};
//          delEll[remoteFilterCategory] = remoteFilterName;
// console.log(delEll)
//       props.setDeleteFilter(delEll);
//       e.target.checked = false;

  }

  const collectionList = products && filter(products, filtername);

  const inputs = collectionList.map(item => {
    return (
      <CheckboxDiv key={v4()}>
        <input
          onChange={setCheckBox}
          type="checkbox"
          name={item}
          value={item}
          className={filtername}
          defaultChecked={checkedFromStor.includes(item) && "checked"}
        ></input>
        <Labels fore={item}>{item} </Labels>
      </CheckboxDiv>
    );
  });

  return <form onChange={checkedFilters}>{inputs}</form>;
});

const CheckboxDiv = styled.div`
  margin-bottom: 20px;
`;

const Labels = styled.label`
  font-size: 14px;
  text-transform: capitalize;
`;
