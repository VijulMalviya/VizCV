import { Box, Container,  Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          p: 1.5,
          borderTop: "1px solid",
          borderColor: "#e2e2e2",
        }}
      >
        <Typography color="inherit" fontSize="small" className="content">
          {"Copyright © "}
          <Link color="text.secondary" href="/">
            SnapCV
          </Link>
          &nbsp;{currentYear}
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center" mt={{ xs: 1, md: 0 }}>
          <Link color="text.secondary" href="/" passHref>
            <Typography fontSize="small" className="content">
              Help Center
            </Typography>
          </Link>
          <Typography className="content" fontSize="small">
            |
          </Typography>
          <Link color="text.secondary" href="/" passHref>
            <Typography fontSize="small" className="content">
              Term & Privacy
            </Typography>
          </Link>
        </Stack>
      </Box>
    </Container>
  );
};

export default Footer;
