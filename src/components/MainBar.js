import React from "react";
import { StyledAppBar } from "./Layout";

const MainBar = ({ day, leftComponent }) => {
  return (
    <StyledAppBar position="static">
      <div className="content">
        {leftComponent && leftComponent}
        <section className="solar-indicator">
          <span>Solar day: {day}</span>
        </section>
        <section className="avatar">
          <span>Astronaut: Miguel A. Bolivar P.</span>
          <img
            src="./images/avatar.jpg"
            alt="Astronaut Miguel A. Bolivar P."
          ></img>
        </section>
      </div>
    </StyledAppBar>
  );
};

export default MainBar;
