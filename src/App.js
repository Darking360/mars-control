import React from "react";
import "./App.css";
import SolarVisualRecords from "./containers/SolarVisualRecords";
import SolarVikingData from "./containers/SolarVikingData";

function App() {
  return (
    <div className="App">
      <SolarVisualRecords />
      <SolarVikingData />
    </div>
  );
}

export default App;
