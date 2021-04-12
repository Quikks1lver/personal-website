import React from "react";
import Media from "./Media";
import MiniHeading from "./MiniHeading";
import TerminalTextBox from "./TerminalTextBox";

// images
import adidama from "./images/adidama.png";
import leo from "./images/leo.png";
import matrix from "./clips/matrix.gif";
import nacho_libre from "./clips/nacho_libre.gif";
import sparks from "./clips/sparks.gif";

const heading: string = "About Me";

const kindergartenIntro: string[] = [
  "In 2007, back when I was in kindergarten, our teacher, Mrs. B, asked us what we wanted to be when we grew up.",
  "Some of my young classmates wanted to be successful doctors, others curious astronauts, and, others still, skillful pro-gamers.",
  "Me? When I was called to share, I told everyone that I wanted to be a firefighter. My classmates chuckled, and my teacher, curious, asked why.",
  '"Simple!", I exclaimed. "If you guys are doing all this, who will save us from getting burned?"',
];

const sparkingADifferenceIntro: string[] = [
  "Innocence aside, I'll always remember that day, since it was the first time I openly stated my goal.",
  "I wanted to *spark* a difference . . . ",
];

const csIntroPara: string[] = [
  ". . . but it wasn't until fairly recently that I finally discovered how I'd do it.",
  "During the scorching summer of 2017, I was stuck at home and tired of playing videogames. Searching for something to pass the time, I decided to give coding a try.",
  "Needless to say, the link between man and machine simply fascinated me.",
  "Knowing that without a competent coder at the keyboard, a computer is nothing, boggled my mind. I had to learn more.",
];

const csMajorPara: string[] = [
  "Throughout my studies, I enjoyed the theory and practicality of computer science. I eventually chose it as my major, as well.",
  "Since then, I've interned, researched, and tutored in the field, and I'm actively looking for which niche I can settle into within CS.",
  "Whatever it may be, I'm confident that I'll use my moral compass to build empowering, robust software that can advance the world.",
];

const otherInterestsPara: string[] = [
  "Aside from coding, of course ;), I enjoy reading and writing comic books, watching movies, playing cool board games (particularly 'Sherriff of Nottingham'), trying new food, and playing around with my dog.",
  "Thanks for reading, and I hope you check out the rest of the site. Peace, and God bless =).",
];

const AboutMe = () => {
  const PIC_WIDTH_LARGE_SCREEN: number = 18;
  const PIC_WIDTH_SMALL_SCREEN: number = 65;

  return (
    <div>
      <MiniHeading heading={heading} />
      <TerminalTextBox paragraphs={kindergartenIntro} />

      <Media
        media={nacho_libre}
        altText="Just trying to help others get by."
        largeScreenPictureWidthPercentage={PIC_WIDTH_LARGE_SCREEN}
        smallScreenPictureWidthPercentage={PIC_WIDTH_SMALL_SCREEN}
        caption="Like Nacho, I was just trying to help others get by :)."
      />

      <TerminalTextBox paragraphs={sparkingADifferenceIntro} />

      <Media
        media={sparks}
        altText="Sparks"
        largeScreenPictureWidthPercentage={PIC_WIDTH_LARGE_SCREEN}
        smallScreenPictureWidthPercentage={PIC_WIDTH_SMALL_SCREEN}
        caption="How to effect change?"
      />

      <TerminalTextBox paragraphs={csIntroPara} />

      <Media
        media={matrix}
        altText="Matrix code"
        largeScreenPictureWidthPercentage={PIC_WIDTH_LARGE_SCREEN}
        smallScreenPictureWidthPercentage={PIC_WIDTH_SMALL_SCREEN}
        caption="What do these numbers mean?"
      />

      <TerminalTextBox paragraphs={csMajorPara} />

      <Media
        media={adidama}
        altText="A picture of Adam"
        largeScreenPictureWidthPercentage={PIC_WIDTH_LARGE_SCREEN}
        smallScreenPictureWidthPercentage={PIC_WIDTH_SMALL_SCREEN}
        caption="Abide by UCF's motto: Reach for the Stars"
      />

      <TerminalTextBox paragraphs={otherInterestsPara} />

      <Media
        media={leo}
        altText="A picture of the dog"
        largeScreenPictureWidthPercentage={PIC_WIDTH_LARGE_SCREEN}
        smallScreenPictureWidthPercentage={PIC_WIDTH_SMALL_SCREEN}
        caption="The doggo says see ya!"
      />
    </div>
  );
};

export default AboutMe;
