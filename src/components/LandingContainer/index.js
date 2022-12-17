import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

import AppBar from "../AppBar/index";
import { Tabs } from "../Tabs";
import { Footer } from "../Footer";

export default function LandingContainer({ signOut }) {
  return (
    <>
      <AppBar />
      <Toolbar />
      <Container>
        <Box component="main" sx={{ my: 2 }}>
          <Tabs />
        </Box>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "rgb(0 0 0 / 85%);",
        }}
      >
        <Container maxWidth="lg">
          <Footer />
        </Container>
      </Box>
    </>
  );
}
