import React from "react";
import Layout from "@/components/layout";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import TinyMCEEditor from "@/components/sections/editor/Editor";
import MobileEditor from "@/components/sections/editor/MobileEditor";
import { CloudUpload } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Draft = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const router = useRouter();
  const { key } = router.query || {};
  const ATSCheckerData = useSelector(
    (state: any) => state.resumeParseContent?.resumeParseData
  );

  const isKeyDataExist = ATSCheckerData?.find((data: any) => data.id === key);
  return (
    <Layout isKeyDataExist={isKeyDataExist}>
      {isKeyDataExist ? (
        <Container maxWidth="lg">
          <Box width="100%" height="83vh" mt={2}>
            {!isMobile ? <TinyMCEEditor /> : <MobileEditor />}
          </Box>
        </Container>
      ) : (
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ height: "50vh", py: 5, width: "100%", textAlign: "center" }}
        >
          <Box>
            <Typography variant="h6">No Data Found</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Please upload your resume and job description to get started.
            </Typography>
            <Button
              variant="contained"
              color="success"
              sx={{ mt: 2 }}
              startIcon={<CloudUpload />}
              onClick={() => router.push("/")}
            >
              Optimize your CV with AI
            </Button>
          </Box>
        </Stack>
      )}
    </Layout>
  );
};

export default Draft;
