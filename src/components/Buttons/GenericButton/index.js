import React from "react";

const styles = {
  width: "100%",
  backgroundColor: "#00AA00",
  color: "white",
  border: "none",
  borderRadius: "3px",
};

const textStyles = {
  margin: "5px",
  fontSize: "16px",
  fontWeight: "bold",
};

export const GenericButton = ({ children, onClick }) => (
  <button onClick={onClick} style={styles}>
    <p style={textStyles}>{children}</p>
  </button>
);
