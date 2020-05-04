import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  height: 12%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  h3 {
    background: white;
    width: 100%;
    padding: 1rem 0;
  }
`;

const SolarTitle = ({ title }) => {
  return (
    <TitleContainer>
      <h3>{title}</h3>
    </TitleContainer>
  );
};

export default SolarTitle;
