import { features } from "@/constant";
import { Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import HightLightCard from "./HightLightCard";
import BackHeading from "@/components/shared-component/BackHeading";

const Highlights = () => {
  return (
    <>
      <Stack direction="column" alignItems="center">
       <BackHeading heading="Highlights" />
        <Typography variant="h5" color="inherit" textAlign="center">
          <strong> Hightlights </strong>
        </Typography>
        <Typography
          className="content"
          fontSize="small"
          sx={{ mt: 2, maxWidth: 800 }}
          textAlign="center"
        >
          Discover the key features that make our service exceptional:
          efficiency, scalability, intuitive interface, and cutting-edge
          technology. Experience unmatched customer support and attention to
          every detail.
        </Typography>
      </Stack>
      <Grid2 container spacing={1} sx={{mt:5}}>
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <HightLightCard feature={feature} />
          </React.Fragment>
        ))}
      </Grid2>
    </>
  );
};

export default Highlights;
