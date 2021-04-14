import React from "react";
import Media from "./Media";
import LinkBox from "./LinkBox";
import MiniHeading from "./MiniHeading";
import TerminalTextBox from "./TerminalTextBox";
import { motion } from "framer-motion";
import { pageVariant, pageTransition } from "./FramerVariants";

// images & videos
import githubLogo from "./images/github_logo.png";
import pizza_vid from "./clips/pizza.gif";

const paragraphs: string[] = [
  "Pizza Popper was my very first React project; I wanted to create a fun game to get better at the framework.",
  "The object of the game is to simply bake as many pizzas as possible!",
  "Feel free to view the brief demo above, and check out the GitHub repo below!",
];

/**
 * Project page for Pizza Popper
 * @returns
 */
const PizzaPopper = () => {
  return (
    <motion.div
      animate="in"
      exit="out"
      initial="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <MiniHeading
        heading="Pizza Popper"
        moreInfo={[
          "Bake infinite pizzas!",
          "Totally NOT Cookie Clicker ;)",
          "Mar. - Apr. 2020",
        ]}
      />

      <TerminalTextBox paragraphs={paragraphs.slice(0, 2)} />

      <Media media={pizza_vid} altText="Pizza Popper video" />

      <TerminalTextBox paragraphs={paragraphs.slice(2)} />

      <div className="link-box-container">
        <LinkBox
          url="https://github.com/Quikks1lver/pizzapopper"
          siteName="Pizza Popper GitHub"
          image={githubLogo}
        />
      </div>
    </motion.div>
  );
};

export default PizzaPopper;
