import React from "react";
import Layout from "@/components/layout";
import ProgressCircle from "@/components/sections/result-page/ProgressCircle";
import ImprovementSection from "@/components/sections/result-page/ImprovmentSection";
import FeedbackSection from "@/components/sections/result-page/FeedbackSection";
import { CloudUpload } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const ATSAndFeedbackResult = () => {
  const router = useRouter();
  const { key } = router.query || {};
  const ATSCheckerData = useSelector(
    (state: any) => state.atsChecker.ATSCheckerData
  );

  const isKeyDataExist = ATSCheckerData?.find((data: any) => data.id === key);

  const {
    ats_score,
    areas_of_improvement,
    key_strengths,
    overall_alignment,
    feedback,
  } = isKeyDataExist || {};

  return (
    <Layout isKeyDataExist={isKeyDataExist}>
      {isKeyDataExist ? (
        <Container maxWidth="md" sx={{ mt: 5 }}>
          {ats_score && (
            <Stack direction="column" alignItems="center" spacing={2}>
              <ProgressCircle ATSScore={ats_score?.score} />
              <Typography
                className="content"
                textAlign="center"
                fontSize="small"
              >
                {ats_score?.description}
              </Typography>
            </Stack>
          )}
          <Container>
            {areas_of_improvement && (
              <ImprovementSection
                title={areas_of_improvement?.heading}
                points={areas_of_improvement?.points}
                color="#ef5350"
                severity="error"
              />
            )}
            {key_strengths && (
              <ImprovementSection
                title={key_strengths?.heading}
                points={key_strengths?.points}
                color="#4caf50"
                severity="success"
              />
            )}

            {overall_alignment && (
              <Stack direction="column" spacing={2} mt={4}>
                <Typography className="content" mt={2}>
                  <strong>{overall_alignment?.heading}</strong>
                </Typography>
                <Box
                  className="result-content-box"
                  sx={{ borderRadius: 0.5, p: 2 }}
                >
                  <Typography className="content" fontSize="small">
                    {overall_alignment?.description}
                  </Typography>
                </Box>
              </Stack>
            )}

            {feedback && (
              <FeedbackSection
                title={feedback?.heading}
                points={feedback?.points}
              />
            )}
          </Container>
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
              <Typography variant="h6">
                No Data Found
              </Typography>
              <Typography variant="body2"  sx={{ mt: 1 }}>
                Please upload your resume and job description to get started.
              </Typography>
              <Button
                variant="contained"
                color="success"
                sx={{ mt: 2 }}
                startIcon={<CloudUpload />} // Optional: Adds an upload icon
                onClick={() => router.push("/")}
              >
                Check ATS & Review Suggestions
              </Button>
            </Box>
          </Stack>
      )}
    </Layout>
  );
};

export default ATSAndFeedbackResult;
