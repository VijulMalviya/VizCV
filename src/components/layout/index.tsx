import { ILayoutProps } from "@/@types/layout";
import { Box, Container } from "@mui/material";
import Header from "../shared-component/header";
import Footer from "../shared-component/footer";

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", pt:15 }}>
      <Header />
      <Container component="main" sx={{ flex: 1 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
