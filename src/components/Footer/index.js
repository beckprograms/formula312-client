import React from "react";
import { SocialIcon } from "react-social-icons";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <div style={{ color: "white" }}>
          Call us:{" "}
          <span style={{ margin: 0, padding: 0, color: "white" }}>
            +1 (917) 376-3763
          </span>
        </div>
        <div style={{ color: "white" }}>
          Email us:{" "}
          <span style={{ margin: 0, padding: 0, color: "white" }}>
            help@Formula312.com
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          margin: "20px 0px",
        }}
      >
        <span style={{ fontSize: "18px", color: "white" }}>
          Register for free:
        </span>
        <button
          style={{
            width: "100px",
            margin: "10px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#fa2a55",
            color: "white",
            padding: "5px",
          }}
        >
          SIGN UP!
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SocialIcon
          network="instagram"
          style={{ margin: "5px", height: 40, width: 40 }}
          fgColor="white"
        />
        <SocialIcon
          network="twitter"
          style={{ margin: "5px", height: 40, width: 40 }}
          fgColor="white"
        />
        <SocialIcon
          network="facebook"
          style={{ margin: "5px", height: 40, width: 40 }}
          fgColor="white"
        />

        <SocialIcon
          network="youtube"
          style={{ margin: "5px", height: 40, width: 40 }}
          fgColor="white"
        />
        <SocialIcon
          network="whatsapp"
          style={{ margin: "5px", height: 40, width: 40 }}
          fgColor="white"
        />
      </div>
      <Copyright />
    </div>
  );
};

const Copyright = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
    >
      <Typography variant="body2" color="white">
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          www.Formula312.com
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
    </div>
  );
};
