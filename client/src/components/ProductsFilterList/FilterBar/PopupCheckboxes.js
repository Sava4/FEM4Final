import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import styled from "styled-components";
import checkBox from "./check-box.png";
import checkBoxChecked from "./check-box-checked.png";

import {
  dispatchSetCheckFilter,
  setDeleteFilter
} from "../../../store/filters";

export const PopupCheckboxes = props => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters.selFilters);
  const availFilters = useSelector(state => state.filters.availFilters);
  const { filtername } = props;
  const checkedFromStor = filters[filtername];

  const filter = (innerArrey, filterType) => {
    const collections = [];
    innerArrey.forEach(
      item =>
        !collections.includes(item[filterType]) &&
        collections.push(item[filterType])
    );

    return collections;
  };

  const checkedFilters = e => {
    e.preventDefault();
    const activeFilters = {};
    activeFilters[
      e.target.getAttribute("data-filtergroupname")
    ] = e.target.getAttribute("data-filtername");
    dispatch(dispatchSetCheckFilter(activeFilters));
    if (!e.target.checked) {
      const remoteFilterCategory = e.target.getAttribute(
        "data-filtergroupname"
      );
      const remoteFilterName = e.target.getAttribute("data-filtername");
      const delEll = {};
      delEll[remoteFilterCategory] = remoteFilterName;
      dispatch(setDeleteFilter(delEll));
      e.target.checked = false;
    }
  };

  const collectionList = filter(availFilters, filtername);
  // console.log(availFilters, collectionList)
  const inputs = collectionList.map(item => {
    return (
      <CheckboxDiv key={v4()}>
        <CheckboxLabel fore={item} checked={checkedFromStor.includes(item)}>
          <InputCheckbox
            type="checkbox"
            name={item}
            value={item}
            data-filtername={item}
            data-filtergroupname={filtername}
            defaultChecked={checkedFromStor.includes(item) && "checked"}
          />
          <CheckBoxIcon />
          <p>{item}</p>
        </CheckboxLabel>
      </CheckboxDiv>
    );
  });

  return <form onChange={checkedFilters}>{inputs}</form>;
};

const CheckboxDiv = styled.div`
  margin-bottom: 20px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.5px;
  cursor: pointer;
  text-transform: capitalize;
  & p {
    margin: 0 !important;
    font-weight: ${props => (props.checked ? "600" : "400")};
  }
`;
const CheckBoxIcon = styled.span`
  width: 10px;
  height: 10px;
  margin-right: 5px;
  background-image: url(${checkBox});
  background-size: contain;
  background-repeat: no-repeat;

  input:checked + & {
    background-image: url(${checkBoxChecked});
  }
`;

const InputCheckbox = styled.input`
  display: none;
`;
