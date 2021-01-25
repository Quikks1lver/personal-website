import React from "react";
import MiniHeading from "./MiniHeading";

import emailjs from "emailjs-com";
import { EmailJS_INFO } from "./EmailJS_Key";

// Much of the code here is from https://www.emailjs.com/docs/examples/reactjs/, thanks!

const ContactMe = () => {
  /**
   * Sends an email through EmailJS
   * @param Event
   */
  const sendEmail = (e: any) => {
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
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactMe;
