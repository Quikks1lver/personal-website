import React from "react";
import MiniHeading from "./MiniHeading";
import TerminalTextBox from "./TerminalTextBox";

const heading: string = "About Me";
const paragraphs: string[] = [
  "In 2007, back when I was in kindergarten, our teacher, Mrs. B, asked us what we wanted to be when we grew up.",
  "Some of my young classmates wanted to be successful doctors, others curious astronauts, and, others still, skillful pro-gamers.",
  "Me? When I was called to share, I told everyone that I wanted to be a firefighter. My classmates chuckled, and my teacher, curious, asked why.",
  "'Simple!', I exclaimed. 'If you guys are doing all this, who'll save us from getting burned?'",
  "Innocence aside, I'll always remember that, since it was the first time I could remember where I openly stated my goal in life . . .",
  "I wanted to make a difference.",
  "Of course, this is what many aspire to do, and it may sound cliché, but I will say I have a strong pulse on how other people are doing, and I can sense when they're having trouble.",
  "Numerous people--teachers, family members, and friends--have commended me on this 'ability' and how I use it to help.",
  "Throughout my teenage years, I tried out many different paths to connect this spark with my goal: I volunteered at a local hospital to experience healthcare, tutored other students to get a feel for teaching, etc.",
  "While I enjoyed learning more about these fields, none *really* clicked for me, allowing me to bridge my abilities and goal.",
  "Then, during the summer of 2017, at the behest of my father (a technical architect), I decided to give coding a try.",
  "The link between man and machine simply fascinated me. Knowing that without a competent coder at the keyboard, a computer is nothing, boggled my mind. I had to learn more.",
  "During my last two years of high school, I enrolled in Java courses, and I enjoyed the theory and practicality of computer science. I eventually chose it as my major, as well.",
  "Since then, I've been blessed enough to have interned, researched, and tutored in the field, and I'm actively looking for which niche I can nestle into within CS.",
  "Whatever the niche may be, I'm confident that I'll use my moral compass and empathy to build empowering, robust software, bridging morals with tech that can advance the world.",
  "- - -",
  "Aside from coding, of course ;), I enjoy reading and writing comic books, watching movies, playing cool board games (particularly 'Sherriff of Nottingham', trying new food, and playing around with my dog.",
  "Thanks for reading, and I hope you check out the rest of the site. Peace, and God bless =)",
];

const AboutMe = () => {
  const styles: React.CSSProperties = {};
  return (
    <div style={styles}>
      <MiniHeading heading={heading} />
      <TerminalTextBox paragraphs={paragraphs} />
    </div>
  );
};

export default AboutMe;
