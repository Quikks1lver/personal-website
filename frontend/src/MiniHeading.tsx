import React from "react";
import ReactTypingEffect from "react-typing-effect";

/**
 * A neat little heading component, simulates someone typing
 * @param param0 main, required heading, a string, along with an optional more info string
 * @returns
 */
const MiniHeading = ({
  heading,
  moreInfo,
}: {
  heading: string;
  moreInfo?: string;
}) => {
  const containerStyle: React.CSSProperties = {
    fontSize: 22,
    textAlign: "center",
    marginTop: 2,
    marginBottom: 2,
    padding: 2,
  };

  const typingSpeed: number = 250;

  var text: string[] = [heading];
  if (moreInfo !== undefined) text.push(moreInfo);

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
