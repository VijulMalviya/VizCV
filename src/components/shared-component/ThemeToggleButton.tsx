import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";

const ThemeToggleButton: React.FC = () => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <IconButton
        color="inherit"
        size="small"
        href=""
        sx={{ alignSelf: "center" }}
        onClick={toggleTheme}
      >
        {theme === "light" ? <MdOutlineWbSunny /> : <LuMoon />}
      </IconButton>
    </>
  );
};

export default ThemeToggleButton;
