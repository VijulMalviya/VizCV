import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import { GoDotFill } from "react-icons/go";
import { FeedbackSectionProps } from "@/@types";


const FeedbackSection: React.FC<FeedbackSectionProps> = ({ title, points }) => {
  return (
    <Stack direction="column" spacing={2} mt={4}>
      <Typography className="content">
        <strong>{title}</strong>
      </Typography>
      <Box className="result-content-box" sx={{ borderRadius: 0.5, p: 2 }}>
        {points?.map((point, index) => (
          <Stack
            key={index}
            direction="row"
            spacing={1}
            alignItems="flex-start"
            mt={0.5}
          >
            <GoDotFill style={{ marginTop: 4 }} />
            <Typography
              key={index}
              className="content"
              fontSize="small"
              sx={{ my: 1 }}
            >
              {point}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Stack>
  );
};

export default FeedbackSection;
