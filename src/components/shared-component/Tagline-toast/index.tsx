import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const TagLineToast = () => {
  return (
    <Container maxWidth="xs">
      <Box
      className="content"
        sx={{
          border: "1px solid #e2e2e2",
          padding: "8px 16px", 
          textAlign: "center",
          borderRadius: 2,  
          backdropFilter: "blur(24px)",
          transition: "border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out", 
          "&:hover": {
            borderColor: "rgba(0, 122, 255, 0.8)",
            boxShadow: 2, 
          },
        }}
      >
        <Typography variant="body2" fontWeight="bold" color="inherit">
          From Good to Hired: Optimize Your CV Today
        </Typography>
      </Box>
    </Container>
  );
};

export default TagLineToast;
