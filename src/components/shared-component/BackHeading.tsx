import { Typography } from "@mui/material";
import React from "react";

const BackHeading:React.FC<{heading:string}> = ({ heading }) => {
  return (
    <>
      {" "}
      <Typography
        className="content"
        sx={{
          fontWeight: "bold",
          opacity: 0.1,
          textAlign: "center",
          fontSize: { xs: "4rem", md: "5rem" },
          lineHeight: "4rem",
        }}
      >
        {heading}
      </Typography>
    </>
  );
};

export default BackHeading;
