import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, useTransition, animated } from "react-spring";

const expandedStyles = {
  width: "100%",
  height: "100%",
  config: { mass: 5, tension: 500, friction: 80 },
};
const minifiedStyles = {
  width: "30%",
  height: "30%",
  config: { mass: 5, tension: 900, friction: 150 },
};

const onStyles = {
  width: "100%",
  height: "100%",
};

const offStyles = {
  width: "0%",
  height: "0%",
};

const AnimatedSolarButton = (props) => {
  const { active, item, setActive } = props;
  const [expanded, setExpanded] = useState(false);
  const getStyles = () => {
    if (active === null) {
      return expanded ? expandedStyles : minifiedStyles;
    }
    if (item === active) return onStyles;
    return offStyles;
  };
  const styledProps = useSpring(getStyles());
  return (
    <animated.button
      onClick={() => {
        setExpanded(!expanded);
        if (!expanded) {
          return setActive(item);
        }
        setActive(null);
      }}
      style={styledProps}
      {...props}
    />
  );
};

export const ComponentContainer = styled.div`
  width: 25vw;
  height: 25vh;
  border-radius: 15px;
  box-shadow: 0 5px 22px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
`;

export const SolarButton = styled(AnimatedSolarButton)`
  background: none;
  outline: none;
  border-radius: 15px;
  box-shadow: 0 5px 22px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  padding: 0;
  display: block;
`;

export const SolarImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const VisualRecordsContainer = styled(ComponentContainer)`
  display: flex;
  flex: 1 0 21%; /* explanation below */
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
