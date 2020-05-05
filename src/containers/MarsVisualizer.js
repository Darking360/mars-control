import React from "react";
import { MarsContainer } from "../components/Layout";
import Mars from "../components/Mars";
import SolarTitle from "../components/SolarTitle";

const MarsVisualizer = () => {
  return (
    <MarsContainer>
      <SolarTitle title="Mars Visual" />
      <section className="solar-day">
        <span>Solar day:</span>
        <span>120</span>
      </section>
      <Mars />
    </MarsContainer>
  );
};

export default MarsVisualizer;
