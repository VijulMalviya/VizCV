import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";

const TestimonialCard: React.FC<{ testimonial: any }> = ({ testimonial }) => {
  return (
    <>
 
        <Box
          className="highlight-cards"
          sx={{
            borderRadius: 2,
            p: 4,
            height: "100%",
            position: "relative",
            textAlign: { xs: "center", sm: "left" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            fontSize={"small"}
            className="content"
            sx={{ mb: 4 }}
            textAlign={"center"}
          >
            {testimonial.testimonial}
          </Typography>

          <Stack direction="column" alignItems="center" textAlign={"center"}>
            <Avatar alt={testimonial.name} />
            <Typography fontSize={"small"} sx={{ mt: 1 }}>
              <strong> {testimonial.name} </strong>
            </Typography>
            <Typography fontSize={"small"} className="content" sx={{ mb: 1 }}>
              ( {testimonial.role} )
            </Typography>
            <Typography fontSize={"small"} className="content">
              {testimonial.college}
            </Typography>
          </Stack>
        </Box>
  
    </>
  );
};

export default TestimonialCard;
