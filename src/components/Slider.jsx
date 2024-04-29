import React, { useState } from "react";
import { Range } from "react-range";

const Slider = ({ values, setValues }) => {
  return (
    <Range
      step={1}
      min={0}
      max={250}
      values={values}
      onChange={(values) => setValues(values)}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "6px",
            width: "100%",
            backgroundColor: "#ccc",
            borderRadius: "50px",
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "15px",
            width: "15px",
            borderRadius: "100%",
            backgroundColor: "#2CB1BA",
          }}
        >
          <div className="slider-price-indicator">{values[props.key]} €</div>
        </div>
      )}
    />
  );
};

export default Slider;
