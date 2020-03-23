import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { v4 } from "uuid";

import styled from "styled-components";

import {
  dispatchSetCheckFilter,
  setDeleteFilter
} from "../../../store/filters";

const mapStateToProps = store => ({
  filters: store.filters.selFilters
});

export const PopupCheckboxes = connect(mapStateToProps, {
  dispatchSetCheckFilter,
  setDeleteFilter
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
    console.log(e.target.classList.value);
    console.log(e.target.id);
    //   const activeFilters = {};
    //     activeFilters[e.target.id] = e.target.value;
    //     props.dispatchSetCheckFilter(activeFilters);
    //    if (!e.target.checked) {
    //  const remoteFilterCategory = e.target.id;
    //    const remoteFilterName = e.target.value;
    //     const delEll = {};
    //     delEll[remoteFilterCategory] = remoteFilterName;
    //   props.setDeleteFilter(delEll);
    //   e.target.checked = false;
    //    }

    const activeFilters = {};
    activeFilters[e.target.className] = e.target.value;
    props.dispatchSetCheckFilter(activeFilters);
    if (!e.target.checked) {
      const remoteFilterCategory = e.target.className;
      const remoteFilterName = e.target.value;
      const delEll = {};
      delEll[remoteFilterCategory] = remoteFilterName;
      props.setDeleteFilter(delEll);
      e.target.checked = false;
    }
  };

  const collectionList = products && filter(products, filtername);

  const inputs = collectionList.map(item => {
    return (
      //   <CheckboxDiv key={v4()}>
      //     <CheckboxLabel fore={item}>
      //           <InputCheckbox
      //                 type="checkbox"
      //                 name={item}
      //                 value={item}
      //                 // className={filtername}
      //                 id={filtername}
      //                 Checked={checkedFromStor.includes(item) && "checked"}>
      //          </InputCheckbox>
      //         <CheckBoxIcon/>
      //         {item}
      //   </CheckboxLabel>
      // </CheckboxDiv>

      <CheckboxDiv key={v4()}>
        <input
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
  font-family: "Montserrat", sans-serif;
`;
// const CheckboxText = styled.span`
//   font-size: 11px;
// `;

// const CheckboxLabel = styled.label`
//   display: flex;
//   align-items: center;
//   background-repeat: no-repeat;
//   background-size: contain;
//   margin-bottom: 20px;
//   font-size: 12px;
//   letter-spacing: 0.5px;
//   cursor: pointer;

//  `;

// const CheckBoxIcon = styled.span`
//   width: 10px;
//   height: 10px;
//   margin-right: 5px;
//   background-image: url(${checkBox});
//   background-size: contain;
//   background-repeat: no-repeat;

//   input:checked + & {
//     background-image: url(${checkBoxChecked});
//   }
// `;

// const InputCheckbox = styled.input`
//   display: none;
// `;
