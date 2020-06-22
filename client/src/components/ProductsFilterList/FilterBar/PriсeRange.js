import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import styled from "styled-components";
import { mediaMobile } from "../../../styledComponents/MediaBreakpointsMixin";
import { setPriceRange } from "../../../store/filters";

const useStyles = makeStyles({
  root: {
    width: "90%",
    margin: "0 auto"
  }
});

const AirbnbSlider = withStyles({
  root: {
    color: "#002D50",
    height: 0.5,
    padding: "13px 0",
    margin: 0
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: "#002D50",
    marginTop: -7,
    marginLeft: -7,
    "&:focus, &:hover, &$active": {
      boxShadow: "#002D50 0 2px 3px 1px"
    }
  },
  active: {},
  track: {
    height: 1
  },
  rail: {
    color: "#d8d8d8",
    opacity: 1,
    height: 1
  },
  markLabel: {
    fontSize: "14px",
    lineHeight: "10px",
    top: "-17px",
    fontFamily: "Montserrat",
    left: "90%!important",
    color: "#000000"
  }
})(Slider);

export const PriсeRange = props => {
  const dispatch = useDispatch();
  const priceRange = useSelector(state => state.filters.priceRange);
  const classes = useStyles();
  const [value, setValue] = useState([
    priceRange.lowPriсe,
    priceRange.hightPrice
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sendToStore = () => {
    const rangeToStore = {
      min: value[0],
      max: value[1]
    };
    dispatch(setPriceRange(rangeToStore));
  };


  const marks = [
  
    {
      value: 200000,
      label: "₴ 200'000"
    }
  ];

  return (
    <div>
      <div className={classes.root}>
        <LeftMarc>₴</LeftMarc>
        <AirbnbSlider
          min={0}
          max={200000}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          // getAriaValueText={valuetext}
          onChangeCommitted={sendToStore}
          marks={marks}
        />
      </div>

      <PriceDisplay>
        <Prices>
          <p>From ₴-</p>
          <p>{value[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'")}</p>
        </Prices>
        <Prices>
          <p>To ₴-</p>
          <p>{value[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'")}</p>
        </Prices>
      </PriceDisplay>
    </div>
  );
};

const PriceDisplay = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Prices = styled.div`
  margin-top: 10px;
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

const LeftMarc = styled.p`
  margin-bottom: 7px !important;
  font-size: 14px !important;
  line-height: 10px;
  font-family: Montserrat;
  text-align: left;
`;
