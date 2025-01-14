import BackHeading from "@/components/shared-component/BackHeading";
import { Typography } from "@mui/material";
import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <>
      <BackHeading heading="Testimonial" />
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mb: 5, textAlign: "center" }}
      >
        Testimonial
      </Typography>

      <TestimonialSlider />
    </>
  );
};

export default Testimonial;
