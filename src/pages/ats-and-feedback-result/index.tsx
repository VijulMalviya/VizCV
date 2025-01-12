import React from "react";
import Layout from "@/components/layout";
import ProgressCircle from "@/components/sections/result-page/ProgressCircle";
import ImprovementSection from "@/components/sections/result-page/ImprovmentSection";
import FeedbackSection from "@/components/sections/result-page/FeedbackSection";
import { Box, Container, Stack, Typography } from "@mui/material";
import { ATSAndFeedbackResultDetails } from "@/constant";

const ATSAndFeedbackResult = () => {
  const {
    ATS_Score,
    Areas_of_Improvement,
    Key_Strengths,
    Overall_Alignment,
    Feedback,
  } = ATSAndFeedbackResultDetails?.data || {};

  return (
    <Layout>
      <Container maxWidth="md">
        <Stack direction="column" alignItems="center" spacing={2}>
          <ProgressCircle ATSScore={ATS_Score?.score} />
          <Typography className="content" textAlign="center" fontSize="small">
            {ATS_Score?.description}
          </Typography>
        </Stack>
        <Container>
          <ImprovementSection
            title={Areas_of_Improvement?.heading}
            points={Areas_of_Improvement?.points}
            color="#ef5350"
            severity="error"
          />
          <ImprovementSection
            title={Key_Strengths?.heading}
            points={Key_Strengths?.points}
            color="#4caf50"
            severity="success"
          />
          <Stack direction="column" spacing={2} mt={4}>
            <Typography className="content" mt={2}>
              <strong>{Overall_Alignment?.heading}</strong>
            </Typography>
            <Box
              className="result-content-box"
              sx={{ borderRadius: 0.5, p: 2 }}
            >
              <Typography className="content" fontSize="small">
                {Overall_Alignment?.description}
              </Typography>
            </Box>
          </Stack>
          <FeedbackSection
            title={Feedback?.heading}
            points={Feedback?.points}
          />
        </Container>
      </Container>
    </Layout>
  );
};

export default ATSAndFeedbackResult;
