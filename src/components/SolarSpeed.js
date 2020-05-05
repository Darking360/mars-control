import React from "react";
import Slider from "@material-ui/core/Slider";
import { SolarSpeedContainer } from "./Layout";

const SolarSpeed = () => {
  return (
    <SolarSpeedContainer>
      <div className="indicators">
        <span>Current speed: 60 seconds for 1 solar day</span>
      </div>
      <Slider
        defaultValue={30}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={5}
        marks
        min={10}
        max={60}
      />
    </SolarSpeedContainer>
  );
};

export default SolarSpeed;
