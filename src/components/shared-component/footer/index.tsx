import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems:'center',
          width: "100%",
          p: 1.5,
          borderTop: "1px solid",
          borderColor: "#e2e2e2",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Typography color="inherit" fontSize="small">
            {"Copyright © "}
            <Link color="text.secondary" href="/">
              SnapCV
            </Link>
            &nbsp;
            {new Date().getFullYear()}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: "left" }}
        >
          <IconButton
            color="inherit"
            size="small"
            href=""
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          >
            <FaGithub />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
};

export default Footer;
