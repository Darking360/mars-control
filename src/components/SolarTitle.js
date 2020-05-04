import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const TitleContainer = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  overflow: hidden;
  h3 {
    background: white;
    width: 100%;
    padding: 1rem 0;
  }
`;

const opened = { height: "12%", width: "100%", config: config.stiff };
const closed = { height: "0%", width: "0%", config: config.stiff };

const SolarTitle = ({ title, open = true }) => {
  const titleStyles = useSpring(open ? opened : closed);
  return (
    <TitleContainer style={titleStyles}>
      <h3>{title}</h3>
    </TitleContainer>
  );
};

export default SolarTitle;
