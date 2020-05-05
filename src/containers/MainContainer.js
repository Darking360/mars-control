import React, { useState, useEffect } from "react";
import SolarVisualRecords from "./SolarVisualRecords";
import SolarPathfinder from "./SolarPathfinder";
import SolarViking from "./SolarViking";
import SolarComms from "./SolarComms";
import MarsVisualizer from "./MarsVisualizer";
import MainBar from "../components/MainBar";
import SolarSpeed from "../components/SolarSpeed";
import {
  App,
  AnimatedOnContainer,
  AnimatedSimpleSection,
  ToggleAppButton,
  offStyles,
  onStyles,
} from "../components/Layout";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { useSpring } from "react-spring";

const MainContainer = () => {
  const [day, setTheDay] = useState(1);
  const [time, setTime] = useState(60);
  const [on, setOn] = useState(false);

  const initializerStyles = useSpring(on ? offStyles : onStyles);
  const appStyles = useSpring(
    on ? { ...onStyles, display: "block" } : { ...offStyles, display: "none" }
  );

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setTheDay(day + 1);
    }, time * 1000);
    return () => clearInterval(interval);
  }, [time, day]);

  const readProps = { day };
  const writeProps = { ...readProps, time, setTime };

  const toggleAppButton = (
    <ToggleAppButton className="turnOn" onClick={() => setOn(!on)}>
      <PowerSettingsNewIcon />
    </ToggleAppButton>
  );

  return (
    <>
      <AnimatedOnContainer style={initializerStyles} className="offFeature">
        <h1>Mars Mission Controls</h1>
        <p>Refer to mission control for further instructions on components</p>
        {toggleAppButton}
        <h2>Monadical and beyond...</h2>
      </AnimatedOnContainer>
      <AnimatedSimpleSection style={appStyles} className="onFeature">
        <MainBar leftComponent={toggleAppButton} {...readProps} />
        <SolarSpeed {...writeProps} />
        <App>
          <SolarVisualRecords />
          <SolarPathfinder {...readProps} />
          <SolarViking {...readProps} />
          <SolarComms />
          <MarsVisualizer {...readProps} />
        </App>
      </AnimatedSimpleSection>
    </>
  );
};

export default MainContainer;
