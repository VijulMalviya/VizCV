import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ThemeToggleButton from "../ThemeToggleButton";

const Header = () => {
  return (
    <Box  sx={{
      position: "fixed",     
      top: 0,                 
      left: 0,               
      width: "100%",   
      backdropFilter:'blur(24px)',      
      zIndex: 9999,               
    }}>
    <Container>
      <Box
        sx={{     
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",        
          py: 2,
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

    </Box>
  );
};

export default Header;
