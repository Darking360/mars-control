import React, { useState } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import {
  BaseButton,
  SolarButton,
  SolarImage,
  FullAnimatedContainer,
  AnimatedHalfContainer,
  SolarVisualIndicator,
  CustomTooltip,
} from "./Layout";

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
    <FullAnimatedContainer {...animatedContainerProps}>
      <SolarButton {...solarButtonProps}>
        <SolarImage src={imageSrc} alt={detail} />
        <CustomTooltip
          arrow
          title={`Click to ${expanded ? "close" : "expand"}`}
        >
          <SolarVisualIndicator>
            {expanded ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </SolarVisualIndicator>
        </CustomTooltip>
      </SolarButton>
      <AnimatedHalfContainer {...animatedContainerProps} customWidth="50%">
        <h3>{detail}</h3>
        <p>{resume}</p>
        {active && (
          <BaseButton
            onClick={() => {
              setActive(null);
              setExpanded(false);
            }}
          >
            <HighlightOffIcon />
          </BaseButton>
        )}
      </AnimatedHalfContainer>
    </FullAnimatedContainer>
  );
};

export default SolarImageRecord;
