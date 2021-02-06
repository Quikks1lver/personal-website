import React, { useState } from "react";
import MiniHeading from "./MiniHeading";

// Email JS
import emailjs from "emailjs-com";
import { EmailJS_INFO } from "./EmailJS_Keys";
import sendNotification from "./Notification_Handlers";

// Much of the code here is from https://www.emailjs.com/docs/examples/reactjs/, thanks!

const ContactMe = () => {
  const [isHoveredUpon, setIsHoveredUpon] = useState(false);
  const hoveredStyle: React.CSSProperties = {
    backgroundColor: "gold",
    color: "black",
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
    <div>
      <MiniHeading heading="Contact Me" />
      <h3 style={{ textAlign: "center" }}>Feel free to shoot me a message!</h3>
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
    </div>
  );
};

export default ContactMe;
