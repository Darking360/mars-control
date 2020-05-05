import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import MainContainer from "./containers/MainContainer";
import "./App.css";
import { theme } from "./config";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer />
    </ThemeProvider>
  );
}

export default App;
