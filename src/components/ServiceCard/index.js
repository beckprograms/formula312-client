import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";

import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const ServiceItem = ({ serviceTypes }) => {
  console.log("serviceTypes ::", serviceTypes);
  return (
    <Item style={{ width: "100%" }}>
      <div>
        <Radio
          checked={true}
          // onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
        <span>Package</span>
      </div>
      <p style={{ margin: "15px 0px", fontWeight: "bold", fontSize: "20px" }}>
        Interior
      </p>
      {serviceTypes.interior.map((service) => {
        return <p>{service}</p>;
      })}
      <p style={{ margin: "15px 0px", fontWeight: "bold", fontSize: "20px" }}>
        Exterior
      </p>
      {serviceTypes.exterior.map((service) => {
        return <p>{service}</p>;
      })}
    </Item>
  );
};

export default function ServiceCard({ serviceTypes }) {
  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <ServiceItem serviceTypes={serviceTypes} />
        <ServiceItem serviceTypes={serviceTypes} />
        <ServiceItem serviceTypes={serviceTypes} />
      </Stack>
    </div>
  );
}
