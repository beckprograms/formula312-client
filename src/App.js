import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingContainer from "./components/LandingContainer";
import { Details } from "./components/Details";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingContainer />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
