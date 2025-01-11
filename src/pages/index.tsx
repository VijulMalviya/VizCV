import Layout from "@/components/layout";
import { Typography, Stack } from "@mui/material";


const Home = () => {
  return (
    <Layout>
      <Stack mt={10} alignItems="center">
        <Typography variant="h4" textAlign="center">
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
          SnapCV helps you craft ATS-friendly CV, score higher, and land your dream job. AI-driven tools and expert tips, all in one app.
        </Typography>
      </Stack>
    </Layout>
  )
}

export default Home