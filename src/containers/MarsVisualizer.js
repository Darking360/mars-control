import React, { useState, useEffect, useRef } from "react";
import { MarsContainer } from "../components/Layout";
import Mars from "../components/Mars";
import SolarTitle from "../components/SolarTitle";

const MarsVisualizer = ({ day }) => {
  const [spin, setSpin] = useState(1);
  const previousDay = useRef();

  useEffect(() => {
    if (previousDay.current !== day) {
      if (spin >= 49) {
        setSpin(1);
      }
      setSpin(spin + 1);
    }
  }, [spin, day]);

  useEffect(() => {
    previousDay.current = day;
  }, [day]);

  return (
    <MarsContainer>
      <SolarTitle title="Mars Visual" respond />
      <section className="solar-day">
        <span>Solar day:</span>
        <span>{day}</span>
      </section>
      <Mars day={spin} />
    </MarsContainer>
  );
};

export default MarsVisualizer;
