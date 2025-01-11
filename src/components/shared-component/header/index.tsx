import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import ThemeToggleButton from "../ThemeToggleButton";
import TagLineToast from "../Tagline-toast";

const Header = () => {
  return (
    <Container maxWidth="lg" fixed>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ p: 2 }}
      >
        <Typography>
          <strong> SnapCV</strong>
        </Typography>
        <ThemeToggleButton />
      </Stack>
      <Box sx={{ mt: 2 }}>
        <TagLineToast />
      </Box>
    </Container>
  );
};

export default Header;
