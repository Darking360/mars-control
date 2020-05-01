import React, { useState } from "react";
import { VisualRecordsContainer } from "../components/Layout";
import SolarImageRecord from "../components/SolarImageRecord";
import { useTransition } from "react-spring";

const solarImages = [
  {
    key: "1",
    imageSrc: "./images/mars_1.jpg",
    detail: "Mars 1 image",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    key: "2",
    imageSrc: "./images/mars_2.jpg",
    detail: "Mars 2 image",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    key: "3",
    imageSrc: "./images/mars_3.jpg",
    detail: "Mars 3 image",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    key: "4",
    imageSrc: "./images/mars_4.jpg",
    detail: "Mars 4 image",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    key: "5",
    imageSrc: "./images/mars_5.jpg",
    detail: "Mars 5 image",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    key: "6",
    imageSrc: "./images/mars_6.jpg",
    detail: "Mars 6 image",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    key: "7",
    imageSrc: "./images/mars_7.jpg",
    detail: "Mars 7 image",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    key: "8",
    imageSrc: "./images/mars_8.jpg",
    detail: "Mars 8 image",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    key: "9",
    imageSrc: "./images/mars_9.jpg",
    detail: "Mars 9 image",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
];

function renderSolarImages(active, setActive, transitions) {
  const utils = { active, setActive };
  console.log("Hay active ----->");
  console.log(active);
  return solarImages.map(
    (record, i) =>
      (!active || active === record.key) && (
        <SolarImageRecord
          key={(i + 1).toString()}
          item={(i + 1).toString()}
          {...record}
          {...utils}
          transitionProps={transitions[i].props}
        />
      )
  );
}

const SolarVisualRecords = () => {
  const [active, setActive] = useState(null);
  const transitions = useTransition(solarImages, (item) => item.key, {
    from: { transform: "translate3d(0,-40px,0)" },
    enter: { transform: "translate3d(0,0px,0)" },
    leave: { transform: "translate3d(0,-40px,0)" },
  });
  return (
    <VisualRecordsContainer>
      {renderSolarImages(active, setActive, transitions)}
    </VisualRecordsContainer>
  );
};

export default SolarVisualRecords;
