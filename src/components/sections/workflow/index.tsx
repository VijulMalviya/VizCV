import BackHeading from "@/components/shared-component/BackHeading";
import { workflow } from "@/constant";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import WorkflowCard from "./WorkflowCard";


const Workflow = () => {
  return (
    <Box sx={{ p: 4 }}>
      <BackHeading heading="Effortless Workflow" />
      <Typography variant="h5"  sx={{ fontWeight: "bold", mb: 5, textAlign:"center" }}>
        Effortless Workflow
      </Typography>
      <Grid container spacing={4}>
        {workflow?.map((step, index) => (
         <React.Fragment key={index}>
           <WorkflowCard step={step} />
         </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default Workflow;
