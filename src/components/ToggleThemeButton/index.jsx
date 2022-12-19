import React, {useContext, useState} from "react";
import {BsFillMoonFill} from "react-icons/bs";
import {FaSun} from "react-icons/fa";
import ThemeContext from "../../contexts/ThemeContext";

import {ThemeButton} from "./themeBtn.styled";

const ToggleThemeButton = () => {
  const [isDark, setIsDark] = useState(false);
  const {changeTheme} = useContext(ThemeContext);
  return (
    <ThemeButton
      className={`${isDark && "isDark"}`}
      onClick={() => {
        setIsDark(!isDark);
        changeTheme();
      }}
    >
      {isDark ? <BsFillMoonFill /> : <FaSun />}
    </ThemeButton>
  );
};

export default ToggleThemeButton;
