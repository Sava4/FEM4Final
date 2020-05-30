import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

const AirbnbSlider = withStyles({
  root: {
    color: '#002D50',
    height: 0.5,
    padding: '13px 0',
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: '#002D50',
    marginTop: -6,
    marginLeft: -6,   
    '&:focus, &:hover, &$active': {
      boxShadow: '#002D50 0 2px 3px 1px',
    },
  
  },
  active: {},
  track: {
    height: 1,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 1,
  },
})(Slider);

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 200000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value)
  };

  return (
    <div className={classes.root}>
      {/* <Typography id="range-slider" gutterBottom>
        Temperature range
      </Typography> */}
      <AirbnbSlider
       min={0}
       max={200000}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}