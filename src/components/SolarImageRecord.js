import React from "react";
import { SolarButton, SolarImage } from "./Layout";

const SolarImageRecord = ({
  imageSrc,
  details,
  resume,
  active,
  setActive,
  item,
  transitionProps,
}) => {
  const utils = { active, setActive, item, transitionProps };
  return (
    <SolarButton {...utils}>
      <SolarImage src={imageSrc} alt={details} />
    </SolarButton>
  );
};

export default SolarImageRecord;
