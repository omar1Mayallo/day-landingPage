import {createContext, useReducer} from "react";
import {themeList} from "./themeList";
import {CHANGE_THEME, themeReducer} from "./theme.reducer";

//Themes
export const lightTheme = themeList.light;
export const darkTheme = themeList.dark;

//Context
const ThemeContext = createContext();

//Provider
export const ThemeContextProvider = ({children}) => {
  const initialState = {
    theme: "light",
  };

  const [state, dispatch] = useReducer(themeReducer, initialState);
  const value = {
    theme: state.theme,
    changeTheme: () => dispatch({type: CHANGE_THEME}),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
