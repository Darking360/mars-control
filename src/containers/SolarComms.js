import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import CreateIcon from "@material-ui/icons/Create";
import {
  CommsContainer,
  Contact,
  BaseButton,
  BaseAnimatedButton,
} from "../components/Layout";

const contactsExpanded = { height: "100%" };
const contactsMinified = { height: "20%" };

const chatExpanded = { height: "60%" };
const chatMinified = { height: "0%" };

const inputExpanded = { height: "20%" };
const inputMinified = { height: "0%" };

const openAvatar = {
  width: "50%",
  height: "auto",
  padding: "1rem 2rem",
  visibility: "visible",
  pDisplay: "block",
};
const closedAvatar = {
  width: "0%",
  height: "none",
  padding: "0rem 0rem",
  visibility: "hidden",
  pDisplay: "none",
};

const contacts = [
  {
    id: "1",
    name: "Goku",
    occupation: "Aerospace Engineer",
    avatarUrl: "./images/avatar1.png",
  },
  {
    id: "2",
    name: "Lisa",
    occupation: "Quantum Physics Engineer",
    avatarUrl: "./images/avatar2.png",
  },
  {
    id: "3",
    name: "Gabriella",
    occupation: "Systems Engineer",
    avatarUrl: "./images/avatar3.png",
  },
  {
    id: "4",
    name: "Violet",
    occupation: "Ground Engineer",
    avatarUrl: "./images/avatar4.png",
  },
];

const renderContacts = (setContact, selectedContact, avatarStyles) => {
  return contacts.map((contact) => (
    <Contact
      key={contact.id}
      customStyles={{ ...avatarStyles, visibility: "visible", padding: 0 }}
    >
      <animated.div style={{ padding: avatarStyles.padding }} className="main">
        <img
          className="avatar"
          alt={`${contact.name} - Avatar`}
          src={contact.avatarUrl}
          onClick={() =>
            selectedContact ? setContact(null) : setContact(contact.id)
          }
        />
        <animated.h3 style={{ visibility: avatarStyles.visibility }}>
          {contact.name}
        </animated.h3>
        <animated.p style={{ display: avatarStyles.pDisplay }}>
          {contact.occupation}
        </animated.p>
        <BaseAnimatedButton
          style={{ visibility: avatarStyles.visibility }}
          onClick={() =>
            selectedContact ? setContact(null) : setContact(contact.id)
          }
        >
          <CreateIcon />
        </BaseAnimatedButton>
      </animated.div>
    </Contact>
  ));
};

const SolarComms = () => {
  const [contact, setContact] = useState(null);
  const chatContainerProps = useSpring(!contact ? chatMinified : chatExpanded);
  const inputContainerProps = useSpring(
    !contact ? inputMinified : inputExpanded
  );
  const contactsContainerProps = useSpring(
    !contact ? contactsExpanded : contactsMinified
  );
  const avatarStyles = useSpring({
    ...(contact ? closedAvatar : openAvatar),
    config: config.stiff,
  });
  return (
    <CommsContainer contact={contact}>
      <animated.section style={contactsContainerProps} className="contacts">
        {renderContacts(setContact, contact, avatarStyles)}
      </animated.section>
      <animated.section style={chatContainerProps} className="chat">
        <h3>Chat</h3>
      </animated.section>
      <animated.section style={inputContainerProps} className="input">
        <input type="text" />
        <BaseButton>></BaseButton>
      </animated.section>
    </CommsContainer>
  );
};

export default SolarComms;
