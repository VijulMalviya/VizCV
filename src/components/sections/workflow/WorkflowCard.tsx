import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const WorkflowCard:React.FC<{step:any}> = ({ step }) => {
  return (
    <> <Grid item xs={12} md={6} lg={4}>
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
  </Grid></>
  )
}

export default WorkflowCard