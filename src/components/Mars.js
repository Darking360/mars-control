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
  transform: rotate3d(0, 0, 1, -25deg) scale3d(0.23, 0.23, 1);
  transition: transform 1s ease;
  border-radius: 100%;
  width: 20rem;
  height: 20rem;
  position: relative;

  div.mars {
    width: 1500px;
    height: 1500px;
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
    animation: ${rotate} 20s linear infinite;
  }
`;

const Mars = () => {
  return (
    <StyledMars class="planet">
      <div class="mars">
        <div class="img-map"></div>
      </div>
    </StyledMars>
  );
};

export default Mars;
