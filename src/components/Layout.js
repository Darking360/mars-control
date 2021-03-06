import React from "react";
import styled, { keyframes } from "styled-components";
import { useSpring, animated } from "react-spring";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import { removeWarningKeys } from "../utils";

// Main components ============================

export const floatingEffect = keyframes`
    0% {
        box-shadow: 0 2px 8px rgba(0, 230, 118, 0.30), 0 3px 6px rgba(0, 230, 118, 0.22);
    }

    50% {
        box-shadow: 0 4px 8px rgba(0, 230, 118, 0.25), 0 10px 10px rgba(0, 230, 118, 0.22);
    }

    100% {
        box-shadow: 0 2px 8px rgba(0, 230, 118, 0.30), 0 3px 6px rgba(0, 230, 118, 0.22);
    }
`;

export const ToggleAppButton = styled.button`
  background-color: none;
  border: none;
  outline: none;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #00e676;
  font-size: 18px;
  animation: ${floatingEffect} 2s infinite;
  svg {
    width: 3rem;
    height: 3rem;
  }
`;

export const AnimatedOnContainer = styled(animated.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  background: black;
  overflow: hidden;
  flex-direction: column;
  p {
    color: white;
    font-weight: bold;
    font-size: 14px;
  }
  ${ToggleAppButton} {
    margin: 1rem 0;
  }
`;

export const AnimatedSimpleSection = styled(animated.section)`
  overflow-x: hidden;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #00e676;
  }
`;

export const offStyles = { width: "100%", height: "0%" };
export const onStyles = { width: "100%", height: "100%" };

// Main App component ====================

export const App = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1200px;
`;

// Solar title components ===================

export const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    boxShadow: theme.shadows[1],
    fontSize: "16px",
  },
}))(Tooltip);

// Image Records visualizer components ====================

const expandedStyles = {
  width: "100%",
  height: "100%",
  transform: "translate3d(0px,0px,0)",
  padding: "0rem",
  config: { mass: 5, tension: 800, friction: 150 },
};

const minifiedStyles = {
  width: "30%",
  height: "30%",
  transform: "translate3d(0px,0px,0)",
  padding: ".2rem",
  display: "flex",
  config: { mass: 5, tension: 800, friction: 150 },
};

const offMinifiedButton = {
  width: "0%",
  height: "0%",
  transform: "translate3d(0px,1000px,0)",
  config: { mass: 5, tension: 800, friction: 150 },
};

const offMinifiedContainer = {
  ...offMinifiedButton,
  display: "flex",
};

const warningKeys = [
  "setActive",
  "expanded",
  "setExpanded",
  "customWidth",
  "customStyles",
  "isSelected",
];

const AnimatedSolarButton = (props) => {
  const { active, item, setActive, expanded, setExpanded } = props;
  const getStyles = () => {
    return expanded
      ? { ...expandedStyles, width: "50%" }
      : active
      ? offMinifiedButton
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
      {...removeWarningKeys(props, warningKeys)}
    />
  );
};

export const AnimatedSolarContainer = (props) => {
  const { active, expanded } = props;
  const getStyles = () => {
    return expanded
      ? {
          ...expandedStyles,
          width: props.customWidth || "100%",
        }
      : active
      ? { ...offMinifiedContainer, display: "none" }
      : props.customWidth
      ? { ...offMinifiedContainer, display: "block" }
      : minifiedStyles;
  };
  const styledProps = useSpring(getStyles());
  return (
    <animated.div
      style={styledProps}
      {...removeWarningKeys(props, warningKeys)}
    />
  );
};

export const ComponentContainer = styled.div`
  width: 45%;
  height: 45vh;
  margin: 1rem;
  border-radius: 15px;
  background-color: #323865;
`;

export const SolarButton = styled(AnimatedSolarButton)`
  background: none;
  outline: none;
  border-radius: 15px;
  overflow: hidden;
  padding: 0;
  display: block;
  border: none;
  cursor: pointer;
  position: relative;
  ${({ expanded }) =>
    expanded &&
    `
    border-top-left-radius: 0;
  `}
`;

export const SolarVisualIndicator = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 5%;
  right: 5%;
`;

export const SolarImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const VisualRecordsContainer = styled(ComponentContainer)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  section.solar-images {
    height: 100%;
    flex: 1 0 21%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const BaseButton = styled.button`
  background: none;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const AnimatedHalfContainer = styled(AnimatedSolarContainer)`
  overflow: hidden;
  position: relative;
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
  p {
    margin: 0 1rem;
    color: white;
    line-height: 1.5rem;
  }
  ${BaseButton} {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #00e676;
  }
`;

export const FullAnimatedContainer = styled(AnimatedSolarContainer)`
  display: flex;
  overflow: hidden;
  ${BaseButton} {
    width: 2rem;
    height: 2rem;
    background-color: white;
    border-radius: 50%;
    border: none;
    box-shadow: 0 5px 22px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
  }
`;

// Charts components =========================

export const LoaderSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
`;

export const ChartSection = styled.section`
  width: 100%;
  height: 85%;
  div.recharts-wrapper,
  svg.recharts-surface {
    height: 95% !important;
  }
`;

export const CustomMessage = styled.p`
  margin: 0.5rem 0;
  color: white;
  font-weight: bold;
`;

export const ChartVisualizerContainer = styled(ComponentContainer)`
  section.selector {
    margin-top: 1rem;
    > div {
      color: white;
      svg {
        color: white;
      }
    }
  }
`;

// Comms components =========================

export const SendButton = styled(BaseButton)`
  ${({ disabled }) =>
    disabled &&
    `
  &&&&& {
    background-color: grey;
  cursor: unset;
  }
`}
`;

export const SpeakingWith = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 0.5rem;
  padding-top: 0;
  span {
    font-size: 16px;
    font-weight: bold;
  }
  span:first-child {
    color: #00e676;
    font-family: "Orbitron";
  }
  span:last-child {
    color: white;
    margin-left: 0.5rem;
  }
  box-shadow: 0 1px 5px rgba(0, 229, 117, 1), 0 3px 5px rgba(0, 229, 117, 1);
  background-color: #323865;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const CommsContainer = styled(ComponentContainer)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  section.contacts {
    z-index: 12;
    display: flex;
    flex-direction: column;
    position: relative;
    section.grid {
      background-color: #323865;
      height: 100%;
      position: relative;
      padding: 1rem 0;
      display: grid;
      width: 100%;
      align-items: center;
      justify-items: center;
      z-index: 10;
      grid-template-columns: 50% 50%;
      ${({ contact }) =>
        contact &&
        `
      grid-template-columns: 25% 25% 25% 25%;
      height: 70%;
    `}
    }

    button.close {
      border: none;
      width: 2rem;
      height: 2rem;
      background-color: white;
      border-radius: 50%;
      box-shadow: 0 5px 22px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 1rem;
      bottom: -1rem;
      cursor: pointer;
      z-index: 8;
    }
  }
  section.chat {
    display: flex;
    flex-direction: column;
    overflow: auto;
    margin-top: auto;
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar {
      width: 6px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #00e676;
    }
    div {
      border: none;
      box-shadow: 0 5px 22px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
      width: 100%;
      max-width: 60%;
      margin: 1rem 0;
      padding: 1rem 0;
      span {
        color: black;
      }
    }
    div.in-message,
    div.out-message {
      background-color: #49529e;
      p {
        color: white;
        font-weight: bold;
        line-height: 1.5rem;
        padding: 0 1rem;
        margin: 0;
      }
    }
    div.in-message {
      margin-left: 2rem;
      align-self: flex-end;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
      p {
        text-align: right;
      }
    }
    div.out-message {
      margin-right: 2rem;
      align-self: flex-start;
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;
      p {
        text-align: left;
      }
    }
  }

  section.input {
    ${({ contact }) =>
      contact &&
      `
      padding: 0.5rem 1rem;
    `}
    form {
      background-color: #49529e;
      border-radius: 30px;
      height: 85%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      box-shadow: 0 1px 5px rgba(0, 229, 117, 1), 0 3px 5px rgba(0, 229, 117, 1);
      input {
        background: none;
        outline: none;
        border: 1px solid grey;
        border-radius: 15px;
        width: 85%;
        height: 50%;
        padding: 0 1rem;
        margin-left: 1rem;
        color: white;
        font-size: 16px;
        border: none;
        ::placeholder {
          color: white;
        }
      }
      ${SendButton} {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-content: center;
        background: #00e676;
        color: white;
        box-shadow: 0 5px 22px rgba(0, 0, 0, 0.3),
          0 5px 12px rgba(0, 0, 0, 0.22);
        margin: 0 1rem;
        cursor: pointer;
      }
    }
  }
`;

const AnimatedContact = (props) => {
  const { customStyles } = props;
  return (
    <animated.div
      style={customStyles}
      {...removeWarningKeys(props, warningKeys)}
    />
  );
};

const AnimatedBaseButton = (props) => {
  const { customStyles } = props;
  return (
    <animated.button
      style={customStyles}
      {...removeWarningKeys(props, warningKeys)}
    />
  );
};

export const BaseAnimatedButton = styled(AnimatedBaseButton)`
  background: none;
  outline: none;
  border: none;
`;

export const Contact = styled(AnimatedContact)`
  height: 50%;
  width: 50%;
  margin-right: 5rem;
  div.main {
    width: 100%;
    height: auto;
    position: relative;
    background-color: white;
    box-shadow: 0 5px 22px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
    padding: 1rem 2rem;
    border-radius: 10px;
    h3,
    p {
      margin: 0;
    }
    p {
      margin-top: 0.5rem;
    }
  }

  img.avatar {
    ${({ isSelected }) =>
      isSelected &&
      `
border: 3px solid green;
    `}
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
    top: -1rem;
    left: -0.5rem;
    box-shadow: 0 5px 22px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
  }

  ${BaseAnimatedButton} {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
    position: absolute;
    top: 1rem;
    right: -1.5rem;
    background: white;
    box-shadow: 0 5px 22px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
    cursor: pointer;
  }
`;

export const MarsContainer = styled(ComponentContainer)`
  section.solar-day {
    height: 8%;
    padding: 1rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 16px;
      font-weight: bold;
    }
    span:first-child {
      color: #00e676;
      font-family: "Orbitron";
    }
    span:last-child {
      color: white;
      margin-left: 0.5rem;
    }
  }
`;

// MainBar components =======================

export const StyledAppBar = styled.header`
  width: 100%;
  background-color: #00e676;
  position: sticky;
  top: 0;
  z-index: 20;
  ${ToggleAppButton} {
    width: 3rem;
    height: 3rem;
    svg {
      width: 2rem;
      height: 2rem;
      color: red;
    }
  }
  div.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    color: white;
    font-weight: bold;
    font-size: 18px;
    max-width: 1200px;
    margin: 0 auto;
    section.solar-indicator {
      color: white;
      font-weight: bold;
      > span {
        font-family: "Orbitron";
      }
    }
    section.avatar {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      > * {
        margin: 0 0.5rem;
      }
      img {
        width: 3rem;
        height: 3rem;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }
`;

// SolarSpeed components =======================

export const SolarSpeedContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0.5rem auto;
  color: white;
  font-weight: bold;
  font-size: 18px;
  div.indicators {
    margin: 0.5rem 0;
  }
  > span > span:last-child > span > span {
    color: white;
  }
`;
