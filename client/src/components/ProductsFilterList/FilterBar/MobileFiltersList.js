import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { v4 } from "uuid";
import styled from "styled-components";
import { mediaMobile } from "../../../styledComponents/MediaBreakpointsMixin";
import modalClose from "./modal-close-btn.png";
import {setTogleShown,
        setClearFilters,} from "./../../../store/filters";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { PriсeRange } from "./PriсeRange";
import { PopupCheckboxes } from "./PopupCheckboxes";
import { Button } from "../../common/Button/Button";

export const MobileFiltersList = props => {
  const dispatch = useDispatch();
  const filtersList= useSelector(state =>state.filters.menuState); 
  const {filtredBy} = props;

  const { setOpenFiltwind } = props;
  const handleChange = (e, nodes) => {
    e.preventDefault();
    dispatch(setTogleShown(e.target.parentNode.id));
  };

  let filters = filtredBy.map(item => {
    let isShown = filtersList[item];
    return (
      <FilterBox key={v4()}>
        <FilterType id={item} >
          <p onClick={handleChange}>{item.replace("_", " ")}</p>
          {isShown ? (
            <div>
              <ExpandLessIcon fontSize="default" onClick={handleChange} />
            </div>            
          ) : (
            <div>
              <ExpandMoreIcon fontSize="default" onClick={handleChange}/>
            </div>            
          )}
        </FilterType>
        {isShown ? (
          item === "price" ? (
            <PriсeRange />
          ) : (
            <PopupCheckboxes filtername={item} />
          )
        ) : (
          false
        )}
      </FilterBox>
    );
  });

  return (
    <FiltersModal>
      <ModalClose onClick={() => setOpenFiltwind(false)} />
      {filters}
      <BottomBlock>
        <Button
          primary
          value={"APPLY FILTERS"}
          width={"168px"}
          onClick={() => setOpenFiltwind(false)}
        />
        <Button
          onClick={() => dispatch(setClearFilters())}
          value={"CLEAR ALL"}
          width={"168px"}
        />
      </BottomBlock>
    </FiltersModal>
  );
};

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
cursor: pointer;
`)}
`;
const FilterType = styled.div`
  ${mediaMobile(`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  & >p {
    font-size: 14px;
    text-transform: uppercase;
    margin: 0;   
    // padding-bottom: 31px;
    // padding-top: 20px;
    padding: 20px 0 31px;
    width: 100%;
    text-align: left;
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
