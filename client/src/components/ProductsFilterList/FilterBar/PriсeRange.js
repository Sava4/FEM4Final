import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import InputRange from "react-input-range";
import styled from "styled-components";
import style from "./priceRange.scss";
import { mediaMobile } from "../../../styledComponents/MediaBreakpointsMixin";
import { setPriceRange } from "../../../store/filters";

const mapStateToProps = store => ({
  priceRange: store.filters.priceRange
});

export const PriсeRange = connect(mapStateToProps, { setPriceRange })(props => {
  const [priceValue, setPriceValue] = useState({
    min: props.priceRange.lowPriсe,
    max: props.priceRange.hightPrice
  });

  return (
    <>
      <PriceForm className={style.form}>
        <InputRange
          maxValue={200000}
          minValue={""}
          formatLabel={value =>
            `₴ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'")} `
          }
          value={priceValue}
          onChange={value => setPriceValue(value)}
          onChangeComplete={value => props.setPriceRange(priceValue)}
        />
      </PriceForm>
      <PriceDisplay>
        <Prices>
          <p>From ₴-</p>
          <p>
            {priceValue.min.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'")}
          </p>
        </Prices>
        <Prices>
          <p>To ₴-</p>
          <p>
            {priceValue.max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'")}
          </p>
        </Prices>
      </PriceDisplay>
    </>
  );
});

const PriceForm = styled.form`
  width: 95%;
  margin-top: 28px;
  height: 25px;
  position: relative !important;
`;
const PriceDisplay = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Prices = styled.div`
  display: flex;
  align-items: center;
  ${mediaMobile(`
margin-bottom:30px;
`)}
  & p:first-child {
    font-size: 14px;
  }
  & p:last-child {
    font-size: 12px;
    color: #c9ced7;
    border-bottom: 1px solid #a7aabb;
  }
`;
