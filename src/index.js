import React from "react";
import ReactDOM from "react-dom/client";
//Css Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
//ThemeContext
import {ThemeContextProvider} from "./contexts/ThemeContext";
//App
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
