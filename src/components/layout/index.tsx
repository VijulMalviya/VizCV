import { ILayoutProps } from "@/@types/layout";
import Header from "../shared-component/Header";
import { Container } from "@mui/material";


const Layout:React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
<Container >

      <Header />
      <main>{children}</main>

</Container>
    </>
  );
};

export default Layout;
