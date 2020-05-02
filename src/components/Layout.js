import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const expandedStyles = {
  width: "100%",
  height: "100%",
  transform: "translate3d(0px,0px,0)",
  config: { mass: 5, tension: 800, friction: 150 },
};

const minifiedStyles = {
  width: "30%",
  height: "30%",
  transform: "translate3d(0px,0px,0)",
  config: { mass: 5, tension: 800, friction: 150 },
};

const offMinified = {
  width: "0%",
  height: "0%",
  transform: "translate3d(0px,1000px,0)",
  config: { mass: 5, tension: 800, friction: 150 },
};

const AnimatedSolarButton = (props) => {
  const { active, item, setActive, expanded, setExpanded } = props;
  const getStyles = () => {
    return expanded
      ? { ...expandedStyles, width: "50%" }
      : active
      ? offMinified
      : expandedStyles;
  };
  const styledProps = useSpring(getStyles());
  return (
    <animated.button
      key={item}
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

export const AnimatedSolarContainer = (props) => {
  const { active, expanded } = props;
  const getStyles = () => {
    return expanded
      ? { ...expandedStyles, width: props.customWidth || "100%" }
      : active
      ? offMinified
      : props.customWidth
      ? offMinified
      : minifiedStyles;
  };
  const styledProps = useSpring(getStyles());
  return <animated.div style={styledProps} {...props} />;
};

export const FullAnimatedContainer = styled(AnimatedSolarContainer)`
  display: flex;
  overflow: hidden;
`;

export const AnimatedHalfContainer = styled(AnimatedSolarContainer)`
  overflow: hidden;
  ${({ expanded }) =>
    expanded &&
    `
    overflow-y: scroll;
  `}
  h3 {
    position: sticky;
    top: 0;
    background-color: white;
    padding: 0.5em 0;
  }
`;

export const ComponentContainer = styled.div`
  width: 45vw;
  height: 45vh;
  border-radius: 15px;
  box-shadow: 0 5px 22px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
`;

export const SolarButton = styled(AnimatedSolarButton)`
  background: none;
  outline: none;
  border-radius: 15px;
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
  flex: 1 0 21%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
`;

// Charts components =========================

export const ChartSection = styled.section`
  width: 100%;
  height: 100%;
  div.recharts-wrapper,
  svg.recharts-surface {
    width: 100% !important;
    height: 95% !important;
  }
`;
