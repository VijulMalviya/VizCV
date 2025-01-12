import { IconButton } from "@mui/material";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/redux/slice/themeSlice";
import { RootState } from "@/@types";

const ThemeToggleButton: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode); 

  const handleToggle = () => {
    dispatch(toggleTheme(mode == "dark"? "light":"dark"));
  };

  return (
    <IconButton
      color="inherit"
      size="small"
      sx={{ alignSelf: "center" }}
      onClick={handleToggle}
    >
      {mode === "light" ? <MdOutlineWbSunny /> : <LuMoon />}
    </IconButton>
  );
};

export default ThemeToggleButton;
