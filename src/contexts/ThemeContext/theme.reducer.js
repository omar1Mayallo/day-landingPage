import {darkTheme, lightTheme} from ".";

//action type
export const CHANGE_THEME = "CHANGE_THEME";

export const themeReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        theme: state.theme === lightTheme ? darkTheme : lightTheme,
      };

    default:
      return state;
  }
};
