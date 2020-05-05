import React from "react";
import Slider from "@material-ui/core/Slider";
import { SolarSpeedContainer } from "./Layout";

const SolarSpeed = ({ time, setTime }) => {
  const handleChange = (_, newTime) => {
    setTime(newTime);
  };

  return (
    <SolarSpeedContainer>
      <div className="indicators">
        <span>Current speed: {time} seconds for 1 solar day</span>
      </div>
      <Slider
        defaultValue={30}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={10}
        max={60}
        value={time}
        onChange={handleChange}
      />
    </SolarSpeedContainer>
  );
};

export default SolarSpeed;
