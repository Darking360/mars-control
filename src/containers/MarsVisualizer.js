import React from "react";
import { MarsContainer } from "../components/Layout";
import Mars from "../components/Mars";
import SolarTitle from "../components/SolarTitle";

const MarsVisualizer = ({ day }) => {
  return (
    <MarsContainer>
      <SolarTitle title="Mars Visual" />
      <section className="solar-day">
        <span>Solar day:</span>
        <span>{day}</span>
      </section>
      <Mars day={day} />
    </MarsContainer>
  );
};

export default MarsVisualizer;
