import React from "react";
import Layout from "@/components/layout";
import { Box, Container } from "@mui/material";
import TinyMCEEditor from "@/components/sections/editor/Editor";


const Draft = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Box width="100%" height="80vh" mt={2}>
          <TinyMCEEditor />
        </Box>
      </Container>
    </Layout>
  );
};

export default Draft;
