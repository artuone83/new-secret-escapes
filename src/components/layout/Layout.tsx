import { FC } from "react";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

export const Layout: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        component="header"
        sx={{
          backgroundColor: "#000000",
          minHeight: "75px",
          display: "flex",
          alignItems: "center",
          marginBottom: 4,
        }}
      >
        <Container>
          <Navigation />
        </Container>
      </Box>

      <Box component="main" sx={{ flex: 1, paddingBottom: 3 }}>
        <Container>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};
