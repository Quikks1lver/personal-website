import React from "react";
import MiniHeading from "./MiniHeading";
import TerminalTextBox from "./TerminalTextBox";

const heading: string = "About Me";
const paragraphs: string[] = [
  "In 2007, back when I was in kindergarten, our teacher, Mrs. B, asked us what we wanted to be when we grew up.",
  "Some of my young classmates wanted to be successful doctors, others curious astronauts, and, others still, skillful pro-gamers.",
  "Me? When I was called to share, I told everyone that I wanted to be a firefighter. My classmates chuckled, and my teacher, curious, asked why.",
  "'Simple!', I exclaimed. 'If you guys are doing all this, who'll save us from getting burned?'",
  "Innocence aside, I'll remember that, since it was the first time I I openly stated my goal.",
  "I wanted to *spark* a difference . . . ",
  "- - -",
  ". . . but It wasn't until recently that I discovered how I'd do it.",
  "During the scorching summer of 2017, I was stuck at home and tired of playing videogames. Searching for something to pass the time, I decided to give coding a try.",
  "Needless to say, the link between man and machine simply fascinated me.",
  "Knowing that without a competent coder at the keyboard, a computer is nothing, boggled my mind. I had to learn more.",
  "Throughout my studies, I enjoyed the theory and practicality of computer science. I eventually chose it as my major, as well.",
  "Since then, I've interned, researched, and tutored in the field, and I'm actively looking for which niche I can nestle into within CS.",
  "Whatever that may be, I'm confident that I'll use my moral compass to build empowering, robust software that can advance the world.",
  "- - -",
  "Aside from coding, of course ;), I enjoy reading and writing comic books, watching movies, playing cool board games (particularly 'Sherriff of Nottingham'), trying new food, and playing around with my dog.",
  "Thanks for reading, and I hope you check out the rest of the site. Peace, and God bless =).",
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
