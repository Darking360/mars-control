import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

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

export const ComponentContainer = styled.div`
  width: 45vw;
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
  ${({ expanded }) =>
    expanded &&
    `
    border-top-left-radius: 0;
  `}
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

export const ChartSection = styled.section`
  width: 100%;
  height: 85%;
  div.recharts-wrapper,
  svg.recharts-surface {
    width: 100% !important;
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

export const CommsContainer = styled(ComponentContainer)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  section.contacts {
    position: relative;
    padding: 1rem 0;
    display: grid;
    width: 100%;
    align-items: center;
    justify-items: center;
    grid-template-columns: 50% 50%;
    z-index: 10;
    ${({ contact }) =>
      contact &&
      `
      grid-template-columns: 25% 25% 25% 25%;
    `}
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 0 5px 22px rgba(0, 229, 117, 1), 0 5px 12px rgba(0, 229, 117, 1);
    button.close {
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
        padding: 1rem;
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
  return <animated.div style={customStyles} {...props} />;
};

const AnimatedBaseButton = (props) => {
  const { customStyles } = props;
  return <animated.button style={customStyles} {...props} />;
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
