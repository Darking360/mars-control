import React, { useState } from "react";
import { CommsContainer, Contact, BaseButton } from "../components/Layout";
import { useSpring, animated } from "react-spring";
import CreateIcon from "@material-ui/icons/Create";

const contactsExpanded = { height: "100%" };
const contactsMinified = { height: "20%" };

const chatExpanded = { height: "60%" };
const chatMinified = { height: "0%" };

const inputExpanded = { height: "20%" };
const inputMinified = { height: "0%" };

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

const renderContacts = (setContact, selectedContact) => {
  return contacts.map((contact) => (
    <Contact key={contact.id}>
      <div className="main">
        <img
          className="avatar"
          alt={`${contact.name} - Avatar`}
          src={contact.avatarUrl}
        />
        <h3>{contact.name}</h3>
        <p>{contact.occupation}</p>
        <BaseButton
          onClick={() =>
            selectedContact ? setContact(null) : setContact(contact.id)
          }
        >
          <CreateIcon />
        </BaseButton>
      </div>
    </Contact>
  ));
};

const SolarComms = () => {
  const [contact, setContact] = useState(null);
  const contactsContainerProps = useSpring(
    !contact ? contactsExpanded : contactsMinified
  );
  const chatContainerProps = useSpring(!contact ? chatMinified : chatExpanded);
  const inputContainerProps = useSpring(
    !contact ? inputMinified : inputExpanded
  );
  return (
    <CommsContainer>
      <animated.section style={contactsContainerProps} className="contacts">
        {renderContacts(setContact, contact)}
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
