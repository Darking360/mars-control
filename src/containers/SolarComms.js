import React, { useState } from "react";
import { CommsContainer } from "../components/Layout";
import { useSpring, animated } from "react-spring";

const contactsExpanded = { height: "100%" };
const contactsMinified = { height: "20%" };

const chatExpanded = { height: "60%" };
const chatMinified = { height: "0%" };

const inputExpanded = { height: "20%" };
const inputMinified = { height: "0%" };

const SolarComms = () => {
  const [contact, setContact] = useState(null);
  const contactsContainerProps = useSpring(
    contact ? contactsExpanded : contactsMinified
  );
  const chatContainerProps = useSpring(contact ? chatMinified : chatExpanded);
  const inputContainerProps = useSpring(
    contact ? inputMinified : inputExpanded
  );
  return (
    <CommsContainer>
      <animated.section style={contactsContainerProps} className="contacts">
        <button onClick={() => (contact ? setContact(null) : setContact(1))}>
          Contact 1
        </button>
      </animated.section>
      <animated.section style={chatContainerProps} className="chat">
        <h3>Chat</h3>
      </animated.section>
      <animated.section style={inputContainerProps} className="input">
        <input type="text" />
        <button>></button>
      </animated.section>
    </CommsContainer>
  );
};

export default SolarComms;
