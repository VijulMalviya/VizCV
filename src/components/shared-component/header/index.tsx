import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ThemeToggleButton from "../ThemeToggleButton";

const Header = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          p: 1.5,
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            background: "linear-gradient(to right, #0A01FF 0%, #CF4EB9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SnapCV
        </Typography>
        <ThemeToggleButton />
      </Box>
    </Container>
  );
};

export default Header;
