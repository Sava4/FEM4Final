import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setClearFilters } from "../../../../../store/filters";
import { mediaTablet } from "../../../../../styledComponents/MediaBreakpointsMixin";
import styled from "styled-components";

export const DropMenu = React.forwardRef((props, ref) => {
  const { dropMenuArray, onSelect } = props;
  const dispatch = useDispatch();
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
        <DroMenuItem key={_id} onClick={() => onLinkClick(item)}>
          <StyledLink to={`/headerMenu/${name}`}>
            <p>{nameForDropMenu}</p>
          </StyledLink>
        </DroMenuItem>
      );
    });

  return <CategoryDropHolder ref={ref}>{dropMenu}</CategoryDropHolder>;

  function onLinkClick(item) {
    dispatch(setClearFilters());
    onSelect(item);
  }
});

const DroMenuItem = styled.div`
  margin-bottom: 20px;
  margin-right: 10px;
`;
const CategoryDropHolder = styled.div`
  height: 210px;
  width: 110px;
  position: absolute;
  top: 50px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  ${mediaTablet(`
  height:260px;
  `)}
`;
const StyledLink = styled(NavLink)`
  line-height: 18px;
  & p:hover {
    text-decoration: underline;
  }
  & p:first-letter {
    text-transform: capitalize;
  }
`;
