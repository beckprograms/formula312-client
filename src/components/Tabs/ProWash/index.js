import React, { useState } from "react";
import "./ProWash.css";

export const ProWash = ({ data }) => {
  const [checked, setChecked] = useState([]);
  const handleTotalCost = (item, checked) => {
    console.log({ item, checked });
    return checked
      ? setChecked((prev) => [...prev, item])
      : setChecked((prev) =>
          prev.filter((c) => c.title !== item.title && c.cost !== item.cost)
        );
  };

  return (
    <div className="proWashContainer">
      Pro wash details
      <p>Total: ${checked.reduce((sum, { cost }) => sum + cost, 0)}</p>
      {data?.map((service, index) => (
        <ServiceOption
          service={service}
          key={index}
          title={service.title}
          cost={service.cost}
          handleTotalCost={handleTotalCost}
        />
      ))}
    </div>
  );
};

const ServiceOption = ({ title, cost, handleTotalCost, service }) => {
  return (
    <div className="serviceOptionContainer">
      <div className="titleAndCost">
        <span>{title}</span>
        <span id="singleItemCost">${cost}</span>
      </div>
      <input
        type={"checkbox"}
        onChange={(e) => handleTotalCost(service, e.target.checked)}
      />
    </div>
  );
};
