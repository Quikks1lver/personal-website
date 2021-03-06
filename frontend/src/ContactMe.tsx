import React, { useState } from "react";
import MiniHeading from "./MiniHeading";
import { motion } from "framer-motion";
import { pageVariant, pageTransition } from "./FramerVariants";

// Email JS
import emailjs from "emailjs-com";
import { EmailJS_INFO } from "./EmailJS_Keys";
import sendNotification from "./Notification_Handlers";

/**
 * Contact Me page
 * Much of the code here is from https://www.emailjs.com/docs/examples/reactjs/, thanks!
 * @returns
 */
const ContactMe = () => {
  const [isHoveredUpon, setIsHoveredUpon] = useState(false);
  const hoveredStyle: React.CSSProperties = {
    backgroundColor: "rgba(255, 245, 245, 0.927)",
    color: "#de5f25",
  };
  const citeStyle: React.CSSProperties = {
    textAlign: "center",
    color: "gray",
    marginTop: "2%",
    marginBottom: "0%",
  };

  /**
   * Sends an email through EmailJS and sends a notification to the user
   * @param Event
   */
  const handleClick = (e: any) => {
    sendNotification(
      "Thank you!",
      "Message Sent.",
      "I will respond as soon as I can.",
      10000
    );

    e.preventDefault();

    emailjs
      .sendForm(
        EmailJS_INFO.EMAIL_SERVICE,
        EmailJS_INFO.EMAIL_TEMPLATE,
        e.target,
        EmailJS_INFO.USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <motion.div
      animate="in"
      exit="out"
      initial="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <MiniHeading heading="Contact Me" />
      <form className="contact-form" onSubmit={handleClick}>
        <input
          className="contact-input"
          type="hidden"
          name="contact_number"
          required={true}
        />
        <input
          className="contact-input"
          placeholder={"Name"}
          type="text"
          name="name"
          required={true}
        />
        <input
          className="contact-input"
          placeholder={"Email Address"}
          type="email"
          name="email"
          required={true}
        />
        <textarea
          className="contact-input"
          placeholder="Message"
          name="message"
          style={{ height: 60 }}
          required={true}
        />
        <input
          onMouseEnter={() => setIsHoveredUpon(true)}
          onMouseLeave={() => setIsHoveredUpon(false)}
          className="contact-submit"
          type="submit"
          value="Send"
          style={isHoveredUpon ? hoveredStyle : undefined}
        />
      </form>
      <h5 style={citeStyle}>
        <em>Powered by EmailJS</em>
      </h5>
    </motion.div>
  );
};

export default ContactMe;
