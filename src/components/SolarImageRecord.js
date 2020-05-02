import React, { useState } from "react";
import {
  SolarButton,
  SolarImage,
  FullAnimatedContainer,
  AnimatedHalfContainer,
} from "./Layout";
import { useSpring, animated } from "react-spring";

const SolarImageRecord = ({
  imageSrc,
  detail,
  resume,
  active,
  setActive,
  item,
}) => {
  const [expanded, setExpanded] = useState(false);
  const solarButtonProps = { active, setActive, expanded, setExpanded, item };
  const animatedContainerProps = { active, expanded };
  return (
    <FullAnimatedContainer {...animatedContainerProps} customWidth="100%">
      <SolarButton {...solarButtonProps}>
        <SolarImage src={imageSrc} alt={detail} />
      </SolarButton>
      <AnimatedHalfContainer {...animatedContainerProps} customWidth="50%">
        <h3>{detail}</h3>
        <p>{resume}</p>
      </AnimatedHalfContainer>
    </FullAnimatedContainer>
  );
};

export default SolarImageRecord;
