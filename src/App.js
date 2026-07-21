import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
          <BrowserRouter basename="/">
            <Main theme={chosenTheme} />
          </BrowserRouter>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
