import React from "react";
import "./App.css";
import SolarVisualRecords from "./containers/SolarVisualRecords";
import SolarPathfinder from "./containers/SolarPathfinder";
import SolarViking from "./containers/SolarViking";
import SolarComms from "./containers/SolarComms";

function App() {
  return (
    <div className="App">
      <SolarVisualRecords />
      <SolarPathfinder />
      <SolarViking />
      <SolarComms />
    </div>
  );
}

export default App;
