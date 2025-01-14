import BackHeading from "@/components/shared-component/BackHeading";
import { workflow } from "@/constant";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";


const Workflow = () => {
  return (
    <Box sx={{ p: 4 }}>
      <BackHeading heading="Effortless Workflow" />
      <Typography variant="h5"  sx={{ fontWeight: "bold", mb: 5, textAlign:"center" }}>
        Effortless Workflow
      </Typography>
      <Grid container spacing={4}>
        {workflow?.map((step, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Box
              className="highlight-cards"
              sx={{
                borderRadius: 2,
                p: 4,
                height: "100%",
                position: "relative",
                textAlign: {xs:"center", sm:"left"},
              }}
            >

              <Typography sx={{ mb: 2 }} fontWeight={"bold"}>
                {step.title}
              </Typography>
              <Typography fontSize={"small"} className="content" sx={{ mb: 4 }}>
                {step.description}
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  bottom: -45,
                  right: 0,
                  fontSize: 120,
                  fontWeight: 900,
                  opacity: 0.2,
                  color: "primary.main",
                  margin:0
                }}
              >
                {step.step}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Workflow;
