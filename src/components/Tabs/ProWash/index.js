import React from "react";
import "./ProWash.css";

const ServiceOption = ({ title, cost }) => {
  return (
    <div className="serviceOptionContainer">
      <div className="titleAndCost">
        <span>{title}</span>
        <span id="singleItemCost">${cost}</span>
      </div>
      <input type={"checkbox"} />
    </div>
  );
};

export const ProWash = ({ data }) => {
  return (
    <div className="proWashContainer">
      Pro wash details
      {data?.map((service, index) => (
        <ServiceOption key={index} title={service.title} cost={service.cost} />
      ))}
    </div>
  );
};
