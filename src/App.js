import React from "react";
import "./App.css";
import SolarVisualRecords from "./containers/SolarVisualRecords";
import SolarPathfinder from "./containers/SolarPathfinder";
import SolarViking from "./containers/SolarViking";

function App() {
  return (
    <div className="App">
      <SolarVisualRecords />
      <SolarPathfinder />
      <SolarViking />
    </div>
  );
}

export default App;
