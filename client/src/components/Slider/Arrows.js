import React from "react";

export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  if (props.homePage === true) {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          width: "25px",
          height: "30px",
          backgroundColor: "white",
          right: `${props.right}%`,
          zIndex: "1",
          top: "96.7%"
        }}
        onClick={onClick}
      >
        <div
          style={{
            border: "solid grey",
            borderWidth: "0 1px 1px 0",
            display: "inline-block",
            padding: "7px",
            position: "relative",
            bottom: "12px",
            transform: "rotate(-45deg)"
          }}
        ></div>
      </div>
    );
  } else {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: "0.5%",
          zIndex: "1",
          backgroundColor: "white",
          border: "1px solid rgb(233,235,245)",
          width: "25px",
          height: "30px"
        }}
        onClick={onClick}
      >
        <div
          style={{
            border: "solid grey",
            borderWidth: "0 1px 1px 0",
            display: "inline-block",
            padding: "7px",
            position: "relative",
            right: "0.5%",
            bottom: "13px",
            transform: "rotate(-45deg)"
          }}
        />
      </div>
    );
  }
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  if (props.homePage === true) {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          backgroundColor: "white",
          width: "25px",
          height: "30px",
          left: `${props.left}%`,
          zIndex: "1",
          top: "96.7%"
        }}
        onClick={onClick}
      >
        <div
          style={{
            border: "solid grey",
            borderWidth: "0 1px 1px 0",
            display: "inline-block",
            padding: "7px",
            position: "relative",
            bottom: "12px",
            left: "8px",
            transform: "rotate(135deg)"
          }}
        />
      </div>
    );
  } else {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          border: "1px solid rgb(233,235,245)",
          backgroundColor: "white",
          width: "25px",
          height: "30px",
          left: `${props.prev}%`,
          top: "50%",
          bottom: "10px",
          zIndex: "1"
        }}
        onClick={onClick}
      >
        <div
          style={{
            border: "solid grey",
            borderWidth: "0 1px 1px 0",
            display: "inline-block",
            padding: "7px",
            position: "relative",
            bottom: "13px",
            left: "8px",
            transform: "rotate(135deg)"
          }}
        />
      </div>
    );
  }
}
