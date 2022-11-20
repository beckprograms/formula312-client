import React, { useState } from "react";

import { BasicWash } from "./BasicWash";
import { ProWash } from "./ProWash";

import "./Tabs.css";

const data = [
  { title: "Vacuum", cost: 20 },
  { title: "Air check", cost: 5 },
  { title: "Fluid check", cost: 5 },
  { title: "Shampoo", cost: 35 },
];

export const Tabs = () => {
  const [active, setActive] = useState("right");
  return (
    <React.Fragment>
      <div style={tabsContainer}>
        <div
          style={basicWashStyles}
          className={active === "left" ? "#EEE" : "whiteBackground"}
          onClick={() => setActive("left")}
        >
          <p className="mainTitle">Basic wash</p>
          <p className="smallTitle">Starting from $125</p>
        </div>
        <div
          style={proWashStyles}
          className={active === "right" ? "#EEE" : "whiteBackground"}
          onClick={() => setActive("right")}
        >
          <p className="mainTitle">Pro wash</p>
          <p className="smallTitle">Starting from $175</p>
        </div>
      </div>
      {active === "right" && <ProWash data={data} />}
      {active === "left" && <BasicWash />}
    </React.Fragment>
  );
};

const tabsContainer = {
  backgroundColor: "#EEE",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
};

const basicWashStyles = {
  margin: "3px",
  borderRadius: "5px",
  padding: "5px",
  width: "50%",
};

const proWashStyles = {
  margin: "3px",
  borderRadius: "5px",
  padding: "5px",
  width: "50%",
};
