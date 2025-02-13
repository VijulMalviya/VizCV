import { LayoutProps } from "@/@types";
import { Box, Container } from "@mui/material";
import Header from "../shared-component/header";
import Footer from "../shared-component/footer";
import { usePathname } from "next/navigation";

const Layout: React.FC<LayoutProps> = ({ children, isKeyDataExist }) => {
  const pathname = usePathname();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        pt: 10,
      }}
    >
      <Header isKeyDataExist={isKeyDataExist} />
      <Container component="main" sx={{ flex: 1 }}>
        {children}
      </Container>
      {pathname !== "/draft" && <Footer />}
    </Box>
  );
};

export default Layout;
