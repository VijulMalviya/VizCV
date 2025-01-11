import JobApplicationForm from "@/components/forms/JobApplicationForm";
import Layout from "@/components/layout";
import Highlights from "@/components/sections/highlight/Highlights";
import { Typography, Stack, Container, Box } from "@mui/material";

const Home = () => {
  return (
    <Layout>
      <Stack mt={20} alignItems="center">
        <Typography  sx={{fontSize: { xs: '1.5rem', md: '2rem' }}}  textAlign="center">
          Transform Your CV into Your
        </Typography>
        <Typography
          variant="h4"
          textAlign="center"
          color="primary"
          fontWeight="900"
          sx={{
            background: "linear-gradient(to right, #0A01FF 0%, #CF4EB9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Ticket to Success
        </Typography>
        <Typography
          variant="body2"
          textAlign="center"
          className="content"
          sx={{ mt: 4, maxWidth: 800 }}
        >
          SnapCV helps you craft ATS-friendly CV, score higher, and land your
          dream job. AI-driven tools and expert tips, all in one app.
        </Typography>
      </Stack>
      <Box sx={{mt:5}}>
        <JobApplicationForm />
      </Box>
      <Box sx={{mt:20}}>
        <Highlights />
      </Box>
    </Layout>
  );
};

export default Home;
