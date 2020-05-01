import React, { useState } from "react";
import { VisualRecordsContainer } from "../components/Layout";
import SolarImageRecord from "../components/SolarImageRecord";

const solarImages = [
  {
    imageSrc: "./images/mars_1.jpg",
    detail: "Mars 1 image",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    imageSrc: "./images/mars_2.jpg",
    detail: "Mars 2 image",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    imageSrc: "./images/mars_3.jpg",
    detail: "Mars 3 image",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    imageSrc: "./images/mars_4.jpg",
    detail: "Mars 4 image",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    imageSrc: "./images/mars_5.jpg",
    detail: "Mars 5 image",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    imageSrc: "./images/mars_6.jpg",
    detail: "Mars 6 image",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    imageSrc: "./images/mars_7.jpg",
    detail: "Mars 7 image",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    imageSrc: "./images/mars_8.jpg",
    detail: "Mars 8 image",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    imageSrc: "./images/mars_9.jpg",
    detail: "Mars 9 image",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
];

function renderSolarImages(active, setActive) {
  const utils = { active, setActive };
  return solarImages.map((record, i) => (
    <SolarImageRecord key={i} item={i} {...record} {...utils} />
  ));
}

const SolarVisualRecords = () => {
  const [active, setActive] = useState(null);
  return (
    <VisualRecordsContainer>
      {renderSolarImages(active, setActive)}
    </VisualRecordsContainer>
  );
};

export default SolarVisualRecords;
