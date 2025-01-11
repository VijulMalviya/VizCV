import { ILayoutProps } from "@/@types/layout";
import { Box, Container } from "@mui/material";
import Header from "../shared-component/header";
import Footer from "../shared-component/footer";

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Container>
        <Header />
        <Box sx={{minHeight:`calc(100vh - 161px)`}}>{children}</Box>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
