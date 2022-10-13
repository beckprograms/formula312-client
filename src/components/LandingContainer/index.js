import React, { useState } from "react";
import StripeContainer from "../StripeContainer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Stack } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Tabs } from "../Tabs";
import { Header } from "../Header";
import { Footer } from "../Footer";

export default function LandingContainer() {
  const medShowFullSize = useMediaQuery("(min-width:1200px)");
  const [showItem, setShowItem] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Box
          sx={{
            width: "100%",
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            borderRadius: 2,
            fontSize: "0.875rem",
            fontWeight: "700",
            textAlign: "center",
            backgroundColor: "#F5F5F5",
          }}
        >
          <Tabs />
        </Box>
        {medShowFullSize ? (
          <Box
            sx={{
              width: "40%",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              borderRadius: 2,
              fontSize: "0.875rem",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            {showItem ? (
              <StripeContainer />
            ) : (
              <div className="carDetail">
                {/* <h3>$250.00</h3> */}

                <button id="stripeButton" onClick={() => setShowItem(true)}>
                  Get car detailing
                </button>
              </div>
            )}
          </Box>
        ) : (
          <Box
            sx={{
              width: "100%",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              borderRadius: 2,
              fontSize: "0.875rem",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            {showItem ? (
              <StripeContainer />
            ) : (
              <div className="carDetail">
                {/* <h3>$250.00</h3> */}

                <button id="stripeButton" onClick={() => setShowItem(true)}>
                  Get car detailing
                </button>
              </div>
            )}
          </Box>
        )}
      </Stack>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "#212E52",
        }}
      >
        <Container maxWidth="sm">
          <Footer />
        </Container>
      </Box>
    </Box>
  );
}
