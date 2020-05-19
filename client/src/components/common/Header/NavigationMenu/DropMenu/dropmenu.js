import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setClearFilters } from "../../../../../store/filters";
import { mediaTablet } from "../../../../../styledComponents/MediaBreakpointsMixin";
import styled from "styled-components";

const mapStateToProps = store => ({
  filters: store.filters.menuState
});

export const DropMenu = connect(mapStateToProps, { setClearFilters })(props => { 
  const { dropMenuArray, setClearFilters } = props;
  let categoryArray = dropMenuArray.filter(item => item.parentId !== "null");
  const dropMenu =
    categoryArray.length &&
    categoryArray.map(item => {
      const { parentId, name, _id } = item;
      const nameForDropMenu =
        parentId === "by zarina"
          ? name.replace("ZARINA", "").replace("By", "")
          : name.toLowerCase();
      return (
        <DroMenuItem key={_id} onClick={() => setClearFilters()}>
          <StyledLink to={`/headerMenu/${name}`}><p>{nameForDropMenu}</p></StyledLink>
        </DroMenuItem>
      );
    });
  return <CategoryDropHolder>{dropMenu}</CategoryDropHolder>;
});

const DroMenuItem = styled.div`
  margin-top: 20px;
  margin-right: 10px;
`;
const CategoryDropHolder = styled.div`
  height: 210px;
  ${mediaTablet(`
  height:260px;
  `)}
  width: 110px;
  position: absolute;
  top: 35px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const StyledLink = styled(NavLink)`
line-height: 18px;
  & p:hover {   
    text-decoration: underline;
  }
  & p:first-letter {
    text-transform:capitalize;
}
`;
