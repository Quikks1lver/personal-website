import React from "react";
import ReactTypingEffect from "react-typing-effect";

/**
 * A neat little heading component
 * @param param0 string representing the heading
 */
const MiniHeading = ({ heading }: { heading: string }) => {
  const containerStyle: React.CSSProperties = {
    fontSize: 22,
    textAlign: "center",
    marginTop: 2,
    marginBottom: 2,
    padding: 2,
  };
  const typingSpeed: number = 200;

  return (
    <div style={containerStyle}>
      <ReactTypingEffect
        text={`{ ${heading} }`}
        typingDelay={typingSpeed}
        speed={typingSpeed}
        eraseSpeed={750}
      />
    </div>
  );
};

export default MiniHeading;
