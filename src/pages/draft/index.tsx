import React from "react";
import Layout from "@/components/layout";
import { Box, Container, useMediaQuery } from "@mui/material";
import TinyMCEEditor from "@/components/sections/editor/Editor";
import MobileEditor from "@/components/sections/editor/MobileEditor";

const Draft = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Layout>
      <Container maxWidth="lg">
        <Box width="100%" height="80vh" mt={2}>
          {!isMobile ? <TinyMCEEditor /> : <MobileEditor />}
        </Box>
      </Container>
    </Layout>
  );
};

export default Draft;
