import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import InputRange from "react-input-range";
import styled from "styled-components";
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
      <PriceForm>
        <InputRange
          maxValue={200000}
          minValue={0}
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
  .form {
    margin-top: 25px;
  }
  .input-range__track {
    background: lightgrey;
    border-radius: 3px;
    cursor: pointer;
    display: block;
    height: 1.5px;
    position: relative;
    // transition: $input-range-track-transition;

    .input-range--disabled & {
      background: blue;
    }
  }

  .input-range__track--background {
    left: 0;
    margin-top: -0.5 * 50px;
    // position: absolute;
    right: 0;
    top: 50%;
  }

  .input-range__track--active {
    background: #002d50;
  }
  .input-range__label-container {
    display: block;
  }
  .input-range__label {
    display: none;
  }
  .input-range__label--min {
    display: block;
    position: absolute;
    top: -20px;
  }
  .input-range__label--max {
    display: block;
    position: absolute;
    top: -18px;
    right: 0;
  }
  .input-range__slider-container {
    height: 10px;
    border-radius: 50%;
    background-color: black;
    width: 10px;
    top: -5px;
  }
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
