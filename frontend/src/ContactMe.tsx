import React from "react";
import MiniHeading from "./MiniHeading";
import { motion } from "framer-motion";
import { pageVariant, pageTransition } from "./FramerVariants";

/**
 * Contact Me page
 * @returns
 */
const ContactMe = () => {
  return (
    <motion.div
      animate="in"
      exit="out"
      initial="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <MiniHeading heading="Contact Me" />
      <h2 style={{ textAlign: "center" }}>
        Please reach me at{" "}
        <a href="mailto: fernadam8@gmail.com">fernadam8@gmail.com</a>!
      </h2>
    </motion.div>
  );
};

export default ContactMe;
