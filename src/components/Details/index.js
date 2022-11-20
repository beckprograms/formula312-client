import React from "react";
import { useLocation } from "react-router-dom";

export const Details = (props) => {
  const data = useLocation();
  const {
    title,
    contentText,
    image,
    rate,
    promoRate,
    basePrice,
    promoContentTop,
    promoContentBottom,
  } = data.state.state;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>{title}</div>
      <div>{contentText}</div>
      <div>${promoRate}</div>
      <div>{promoContentTop}</div>
      <div>{promoContentBottom}</div>
    </div>
  );
};
