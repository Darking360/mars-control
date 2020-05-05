import React, { useState, useEffect } from "react";
import SolarVisualRecords from "./SolarVisualRecords";
import SolarPathfinder from "./SolarPathfinder";
import SolarViking from "./SolarViking";
import SolarComms from "./SolarComms";
import MarsVisualizer from "./MarsVisualizer";
import MainBar from "../components/MainBar";
import SolarSpeed from "../components/SolarSpeed";
import { App } from "../components/Layout";

const MainContainer = () => {
  const [day, setTheDay] = useState(1);
  const [time, setTime] = useState(60);

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setTheDay(day + 1);
    }, time * 1000);
    return () => clearInterval(interval);
  }, [time, day]);

  const readProps = { day };
  const writeProps = { ...readProps, time, setTime };

  return (
    <>
      <MainBar {...readProps} />
      <SolarSpeed {...writeProps} />
      <App>
        <SolarVisualRecords />
        <SolarPathfinder {...readProps} />
        <SolarViking {...readProps} />
        <SolarComms />
        <MarsVisualizer {...readProps} />
      </App>
    </>
  );
};

export default MainContainer;
