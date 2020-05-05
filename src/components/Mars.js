import React from "react";
import styled, { keyframes } from "styled-components";

// Original animation and work thanks to the amazing: https://codepen.io/tedmcdo
// Author: Ted McDonald
// Codesandbox here: https://codepen.io/tedmcdo/pen/MvyOjR

const rotate = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-50%, 0, 0);
  }
`;

const StyledMars = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 70%;
  div.planet {
    transform: rotate3d(0, 0, 1, -25deg) scale3d(0.23, 0.23, 1);
    transition: transform 1s ease;
    border-radius: 100%;
    width: 1000px;
    height: 1000px;
    position: relative;

    &:after {
      content: "";
      width: 1000px;
      height: 1000px;
      position: absolute;
      border-radius: 100%;
      top: 0;
      left: 0;
      box-shadow: inset 25px 40px 100px 0px rgba(255, 255, 255, 0.45),
        -50px -50px 150px 0px rgba(225, 69, 38, 0.35),
        -25px -55px 150px 0px rgba(226, 108, 66, 0.2),
        0 0 150px 100px rgba(58, 2, 0, 0.4);
    }
  }

  div.mars {
    width: 1000px;
    height: 1000px;
    border-radius: 100%;
    position: relative;
    overflow: hidden;
    clip-path: content-box;
    background-image: radial-gradient(
        circle farthest-side at 0% 0%,
        rgba(255, 255, 255, 0.25) 0%,
        rgba(0, 0, 0, 0.35) 100%
      ),
      radial-gradient(
        circle farthest-side at 0% 0%,
        rgba(255, 189, 157, 1) 25%,
        transparent 80%
      ),
      radial-gradient(
        circle farthest-side at 0% 0%,
        rgba(218, 32, 13, 1) 0%,
        transparent 100%
      ),
      radial-gradient(
        circle farthest-side at 50% 0%,
        rgba(240, 87, 72, 1) 0%,
        rgba(39, 3, 0, 1) 85%
      );
  }
  div.img-map {
    width: 6000px;
    height: 1500px;
    position: absolute;
    mix-blend-mode: soft-light;
    opacity: 0.4;
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/mars-bg-min.jpg")
      0% 0% / auto 100% repeat-x;
    transform: translate3d(-${({ day }) => day}%, 0, 0);
  }
`;

const Mars = ({ day }) => {
  return (
    <StyledMars day={day}>
      <div className="planet">
        <div class="mars">
          <div class="img-map"></div>
        </div>
      </div>
    </StyledMars>
  );
};

export default Mars;
