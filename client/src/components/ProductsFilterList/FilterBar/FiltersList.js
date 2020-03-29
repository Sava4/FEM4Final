import React from "react";
import { connect } from "react-redux";
import { v4 } from "uuid";

import styled from "styled-components";
import { mediaMobile } from "../../../styled-components/media-breakpoints-mixin";
import { setTogleShown } from "./../../../store/filters";
import { setDeleteFilter } from "./../../../store/filters";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { PopupCheckboxes } from "./PopupCheckboxes";

const mapStateToProps = store => ({
  filters: store.filters.menuState
});

export const FiltersList = connect(mapStateToProps, {
  setTogleShown,
  setDeleteFilter
})(props => {
  // console.log(props);
  const filtredBy = [
    "collection",
    "metal",
    "metal_color",
    "gemstone",
    "gemstone_color"
  ];

  const handleChange = (e, nodes) => {
    e.preventDefault();
    props.setTogleShown(e.target.parentNode.id);
  };

  let filters = filtredBy.map(item => {
    let isShown = props.filters[item];
    return (
      <FilterBox key={v4()}>
          <FilterType id={item}>
              <p>
                {item.replace("_", " ")}
              </p>
              {!isShown && (
                <ExpandMoreIcon fontSize="small" onClick={handleChange} />
              )}
              {isShown && (
                <ExpandLessIcon fontSize="small" onClick={handleChange} />
              )}
          </FilterType>
          <CheckboxBlock isOpen={isShown}>
              <PopupCheckboxes filtername={item} />
          </CheckboxBlock>
      </FilterBox>
    );
  });

  return <div>{filters}</div>;
});

const CheckboxBlock = styled.div`
  display: ${props => (props.isOpen ? "block" : "none")};
`;

const FilterBox = styled.div`
height: fit-content;
 border-bottom: 1px solid #E9EBF5;

`;
const FilterType = styled.div`
  padding-top: 22px;
  display: flex;
  justify-content: space-between;
  margin: 0px; 
  & >p {
    font-size: 14px;
    text-transform: uppercase;

  }
`;
