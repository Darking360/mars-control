import React from "react";
import "./App.css";
import SolarVisualRecords from "./containers/SolarVisualRecords";
import SolarPathfinder from "./containers/SolarPathfinder";
import SolarViking from "./containers/SolarViking";
import SolarComms from "./containers/SolarComms";
import MarsVisualizer from "./containers/MarsVisualizer";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./config";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SolarVisualRecords />
        <SolarPathfinder />
        <SolarViking />
        <SolarComms />
        <MarsVisualizer />
      </div>
    </ThemeProvider>
  );
}

export default App;
