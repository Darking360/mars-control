import React from "react";
import styled from "styled-components";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useSpring, animated, config } from "react-spring";
import { CustomTooltip } from "./Layout";

const TitleContainer = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  overflow: hidden;
  background: white;
  h3 {
    width: 100%;
    padding: 1rem 0;
  }
  svg {
    margin-right: 1rem;
  }
`;

const opened = { height: "12%", width: "100%", config: config.stiff };
const closed = { height: "0%", width: "0%", config: config.stiff };

const SolarTitle = ({ title, open = true, respond = false }) => {
  const titleStyles = useSpring(open ? opened : closed);
  return (
    <TitleContainer style={titleStyles}>
      <h3>{title}</h3>
      {respond && (
        <CustomTooltip
          arrow
          title="This component responds to Solar day changes, try increasing it on the top bar."
        >
          <VisibilityIcon />
        </CustomTooltip>
      )}
    </TitleContainer>
  );
};

export default SolarTitle;
