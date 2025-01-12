import { FC } from "react";
import { Grid2 } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import { HighlightCardProps } from "@/@types";


const HighlightCard: FC<HighlightCardProps> = ({ feature }) => {
  return (
    <Grid2 size={{ xs: 12, sm: 6, md: 4 }} >
      <Stack
        direction="column"
        spacing={1}
        useFlexGap
        sx={{
          color: 'inherit',
          p: 3,
          height: '100%',
        }}
        borderRadius={2}
        className="highlight-cards"
      >
        <Box className="content">{feature.icon}</Box>
        <div>
          <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
            {feature.title}
          </Typography>
          <Typography className="content" fontSize="small" >
            {feature.description}
          </Typography>
        </div>
      </Stack>
    </Grid2>
  );
};

export default HighlightCard;
