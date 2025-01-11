import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const TagLineToast = () => {
  return (
    
      <Container maxWidth="xs">
        <Box
          sx={{
            border: "1px solid #e2e2e2",
            padding: "6px 16px",
            textAlign: "center",
            borderRadius: 5,
            backdropFilter: "blur(24px)",
            transition: "border-color 0.3s ease-in-out",
            "&:hover": {
              borderColor:' rgba(0, 122, 255, 0.8)',
              boxShadow:2
            },

          }}
        >

            
          <Typography fontSize="12px" color="inherit">
            <strong> From Good to Hired: Optimize Your Resume Today</strong>
          </Typography>
            </Box>
      </Container>
  
  );
};

export default TagLineToast;
