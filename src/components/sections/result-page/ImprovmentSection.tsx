import React from "react";
import { Stack, Typography, Box, Alert } from "@mui/material";
import { GoDotFill } from "react-icons/go";
import { ImprovementSectionProps } from "@/@types";

const ImprovementSection: React.FC<ImprovementSectionProps> = ({
  title,
  points,
  color,
  severity,
}) => {
  return (
    <Stack direction="column" spacing={2} mt={4}>
      <Typography color={color}>
        <strong>{title}</strong>
      </Typography>
      <Box sx={{ borderRadius: 0.5 }}>
        <Alert variant="outlined" severity={severity} icon={false}>
          {points?.map((point, index) => (
            <Stack
              key={index}
              direction="row"
              spacing={1}
              mt={index === 0 ? 0 : 1}
              alignItems="flex-start"
            >
              <GoDotFill style={{ marginTop: 4 }} color={color} />
              <Typography fontSize="small" color={color} sx={{ my: 1 }}>
                {point?.description}
              </Typography>
            </Stack>
          ))}
        </Alert>
      </Box>
    </Stack>
  );
};

export default ImprovementSection;
