import React from "react";
import ReactTypingEffect from "react-typing-effect";

/**
 * A neat little heading component, simulates someone typing
 * @param param0 main, required heading, a string, along with an string array with more info
 * @returns
 */
const MiniHeading = ({
  heading,
  moreInfo,
}: {
  heading: string;
  moreInfo?: string[];
}) => {
  const containerStyle: React.CSSProperties = {
    fontSize: 22,
    textAlign: "center",
    marginTop: 2,
    marginBottom: 2,
    padding: 2,
  };

  const typingSpeed: number = 190;

  var text: string[] = [heading];
  if (moreInfo !== undefined) {
    moreInfo.forEach((s) => text.push(s));
  }

  return (
    <div style={containerStyle}>
      <ReactTypingEffect
        text={text}
        typingDelay={350}
        speed={typingSpeed}
        eraseSpeed={typingSpeed}
        eraseDelay={3000}
      />
    </div>
  );
};

export default MiniHeading;
