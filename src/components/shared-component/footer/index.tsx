import { Box, Container,  Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container sx={{mt:5}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          py: 2,
       
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
