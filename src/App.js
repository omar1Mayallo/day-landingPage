import {useContext} from "react";
import Landing from "./pages/Landing";
//Styles
import ThemeContext from "./contexts/ThemeContext";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./styles/GlobalStyles";
import "./App.css";

function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <>
      <ThemeProvider theme={{theme}}>
        <GlobalStyles />
        <Landing />
      </ThemeProvider>
    </>
  );
}

export default App;
