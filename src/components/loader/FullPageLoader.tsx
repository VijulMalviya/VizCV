import { CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";

const FullPageLoader = ({ loadingMessage }: { loadingMessage: string }) => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1000,
          backdropFilter: "blur(10px)",
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ p: 2 }}
        >
          <CircularProgress color="inherit" />
          <Typography color="inherit" textAlign="center" fontWeight="bold">
            {loadingMessage}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default FullPageLoader;
