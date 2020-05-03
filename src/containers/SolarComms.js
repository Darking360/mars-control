import React, { useState, useEffect } from "react";
import { useSpring, useTransition, animated, config } from "react-spring";
import CreateIcon from "@material-ui/icons/Create";
import SendIcon from "@material-ui/icons/Send";
import {
  CommsContainer,
  Contact,
  SendButton,
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

const initialMessages = [
  {
    type: "in",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    type: "in",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    type: "out",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    type: "in",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

const renderMessages = (messages, transitions) => {
  return messages.map(({ type, message }, i) => (
    <animated.div
      key={i}
      style={transitions[i].props}
      className={`${type}-message`}
    >
      <span>{message}</span>
    </animated.div>
  ));
};

const SolarComms = () => {
  const [contact, setContact] = useState(null);
  const [messages, setMessages] = useState(initialMessages);
  const [message, setMessage] = useState("");
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

  const transitions = useTransition(messages, (message, i) => i, {
    from: { transform: "translate3d(-40px,0,0)", opacity: "0" },
    enter: { transform: "translate3d(0,0,0)", opacity: "1" },
    leave: { transform: "translate3d(-40px,0,0)", opacity: "0" },
  });

  const handleChange = ({ target: { value } }) => {
    setMessage(value);
  };

  const handleSubmit = () => {
    if (message.length) submitMessage();
  };

  const submitMessage = () => {
    setMessages([...messages, { type: "out", message }]);
    setMessage("");
  };

  useEffect(() => {
    const scrollingElement = document.getElementById("chat");
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
  }, [messages]);

  return (
    <CommsContainer contact={contact}>
      <animated.section style={contactsContainerProps} className="contacts">
        {renderContacts(setContact, contact, avatarStyles)}
      </animated.section>
      <animated.section id="chat" style={chatContainerProps} className="chat">
        {renderMessages(messages, transitions)}
      </animated.section>
      <animated.section style={inputContainerProps} className="input">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="message"
            value={message}
            onChange={handleChange}
          />
          <SendButton type="submit" onClick={submitMessage} disabled={!message}>
            <SendIcon />
          </SendButton>
        </form>
      </animated.section>
    </CommsContainer>
  );
};

export default SolarComms;
