import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import logo from "../../Tabs/ProWash/assets/wax.jpeg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./LargeCard.css";

const servicesPills = ["car wash", "tint", "tire pressure"];

const SpanPill = ({ service }) => (
  <span
    style={{
      margin: "2px 2px",
      fontSize: "10px",
      padding: "2.5px 5px",
      color: "white",
      fontWeight: "bold",
      backgroundColor: "green",
      borderRadius: "5px",
      height: "20px",
    }}
  >
    <span
      style={{
        color: "white",
        padding: "5px",
      }}
    >
      {service.toUpperCase()}
    </span>
  </span>
);

const Pill = ({ rate }) => {
  return (
    <div
      style={{
        backgroundColor: "red",
        width: "30px",
        borderRadius: "5px",
      }}
    >
      <span
        style={{
          color: "white",
          width: "50px",
          padding: "3px",
        }}
      >
        {rate}
      </span>
    </div>
  );
};

const percent = (basePrice, promoRate = 0) => {
  const difference = basePrice - promoRate;
  const result = (difference / basePrice) * 100;

  return Math.round(result * 100) / 100;
};

export const LargeCard = ({
  title,
  contentText,
  image,
  rate,
  promoRate,
  basePrice,
  promoContentTop,
  promoContentBottom,
}) => {
  return (
    <Link
      to={{ pathname: "/details" }}
      state={{
        state: {
          title,
          contentText,
          image,
          rate,
          promoRate,
          basePrice,
          promoContentTop,
          promoContentBottom,
        },
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "7px",
          border: "1px solid lightgray",
          margin: "15px 0",
          boxShadow: "0px 2px 10px 0px lightgray",
        }}
      >
        <div
          style={{
            margin: "10px 2px",
            borderRadius: "7px",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <div style={{ width: "150px" }}>
            <div
              style={{
                width: "30%",
                borderRadius: "7px",
              }}
            >
              <img
                src={logo}
                alt="img"
                height={"110px"}
                width={"150px"}
                style={{ borderRadius: "7px" }}
              />
            </div>
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              paddingLeft: "5px",
            }}
            className="font-link"
          >
            {title}
            <div>
              <Rating
                name="half-rating"
                precision={0.5}
                value={rate}
                color="red"
              />
              <div>
                <Pill rate={rate} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                fontSize: "12px",
              }}
            >
              <LocationOnIcon fontSize="small" sx={{ color: "darkgreen" }} />
              {contentText}
            </div>
          </div>
        </div>
        <div style={{ margin: "5px" }}>
          {servicesPills.map((service, index) => (
            <span key={index}>
              <SpanPill service={service} />
            </span>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span className="line"></span>
        </div>
        <div style={{}}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5px",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                padding: "2.5px 5px",
                color: "white",
                fontWeight: "bold",
                backgroundColor: "#00A4FF",
                borderRadius: "5px",
                height: "20px",
              }}
            >{`${promoContentTop.toUpperCase()}`}</span>
            <span
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >{`$${promoRate}`}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5px",
            }}
          >
            <span className="font-link">{promoContentBottom}</span>
            {basePrice !== promoRate && (
              <span style={{ color: "red", fontWeight: "bold" }}>{`${percent(
                basePrice,
                promoRate
              )}% OFF`}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
