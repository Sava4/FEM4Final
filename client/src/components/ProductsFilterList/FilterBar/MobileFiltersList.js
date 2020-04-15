import React from "react";
import { connect } from "react-redux";
import { v4 } from "uuid";
import styled from "styled-components";
import { mediaMobile } from "../../../styledComponents/MediaBreakpointsMixin";
import modalClose from "./modal-close-btn.png";
import {
  setTogleShown,
  setClearFilters,
  setDeleteFilter
} from "./../../../store/filters";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { PriсeRange } from "./PriсeRange";
import { PopupCheckboxes } from "./PopupCheckboxes";
import { Button } from "../../Buttons/button";

const mapStateToProps = store => ({
  filters: store.filters.menuState
});

export const MobileFiltersList = connect(mapStateToProps, {
  setTogleShown,
  setDeleteFilter,
  setClearFilters
})(props => {
  const filtredBy = [
    "price",
    "collection",
    "metal",
    "metal_color",
    "gemstone",
    "gemstone_color"
  ];

  const { setOpenFiltwilnd } = props;
  // const priceIsShown = props.filters["price"];
  const handleChange = (e, nodes) => {
    e.preventDefault();
    props.setTogleShown(e.target.parentNode.id);
  };

  let filters = filtredBy.map(item => {
    let isShown = props.filters[item];
    return (
      <FilterBox key={v4()}>
        <FilterType id={item}>
          <p>{item.replace("_", " ")}</p>
          {isShown ? (
            <ExpandLessIcon fontSize="small" onClick={handleChange} />
          ) : (
            <ExpandMoreIcon fontSize="small" onClick={handleChange} />
          )}
        </FilterType>
        {isShown ? (
          item === "price" ? (
            <PriсeRange />
          ) : (
            <PopupCheckboxes filtername={item} />
          )
        ) : null}
      </FilterBox>
    );
  });
  // const backgroundColor = {
  //   background:"blue",
  //   color:"white"
  // }

  return (
    <FiltersModal>
      <ModalClose onClick={() => setOpenFiltwilnd(false)} />

      {filters}
      <BottomBlock>
        <Button
          primary
          value={"APPLY FILTERS"}
          width={"168px"}
          onClick={() => setOpenFiltwilnd(false)}
        />
        <Button
          onClick={() => props.setClearFilters()}
          value={"CLEAR ALL"}
          width={"168px"}
        />
      </BottomBlock>
    </FiltersModal>
  );
});

const FiltersModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100%;
  padding-top: 40px;
  overflow: auto;
  background-color: white;
`;
const ModalClose = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  left: 10px;
  top: 20px;
  background: url(${modalClose});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;
const FilterBox = styled.div`
  display: none;
  ${mediaMobile(`
display: block;
text-align: center;
width: 80%;
border-bottom: 1px solid #E9EBF5;
`)}
`;
const FilterType = styled.div`
  ${mediaMobile(`
  padding-top: 22px;
  display: flex;
  justify-content: space-between;
  height: fit-content;
  & p {
    font-size: 14px;
    text-transform: uppercase;
    margin: 0;  
    padding-bottom: 31px;
  }
`)}
`;

const BottomBlock = styled.div`
  width: inherit;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;
`;
