import { ILayoutProps } from "@/@types/layout";
import { Container } from "@mui/material";
import TagLineToast from "../shared-component/Tagline-toast";


const Layout:React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
<Container>
      <TagLineToast />
      <main>{children}</main>

</Container>
    </>
  );
};

export default Layout;
