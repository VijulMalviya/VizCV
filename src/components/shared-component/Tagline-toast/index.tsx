import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const TagLineToast = () => {
  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        top: '12%',
        boxShadow: 0,
        bgcolor: "transparent",
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            border: "1px solid #e2e2e2",
            padding: "6px 16px",
            textAlign: "center",
            borderRadius: 5,
            backdropFilter: "blur(24px)",
          }}
        >
          <Typography fontSize="12px">
            <strong> From Good to Hired: Optimize Your Resume Today</strong>
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
};

export default TagLineToast;
