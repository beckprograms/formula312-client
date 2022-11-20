import React from "react";
import "./styles.css";

export const Header = ({ signOut }) => {
  return (
    <div className="headerContainer">
      <div className="left-container">
        <span id="brand-name">FORMULA312</span>
      </div>
      <div className="right-container">
        <span id="login" onClick={signOut}>
          Log Out
        </span>
        <span id="sign-up">Sign up</span>
      </div>
    </div>
  );
};
