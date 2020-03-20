import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { v4 } from "uuid";

import styled from "styled-components";

import { dispatchSetCheckFilter } from "../../../store/filters";

const mapStateToProps = store => ({
  filters: store.filters.selFilters
});

export const PopupCheckboxes = connect(mapStateToProps, {
  dispatchSetCheckFilter
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
        //   console.log("Secsess ");
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

    let activeFilters = {};
    activeFilters[e.target.className] = e.target.value;
    props.dispatchSetCheckFilter(activeFilters);
  };

  const collectionList = products && filter(products, filtername);

  const inputs = collectionList.map(item => {
    return (
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
`;
