import React from "react";
import ReactTypingEffect from "react-typing-effect";

/**
 * A neat little heading component
 * @param param0 string representing the heading
 */
const MiniHeading = ({ heading }: { heading: string }) => {
  const styles: React.CSSProperties = {
    fontSize: 21,
    textAlign: "center",
  };
  const typingSpeed: number = 200;

  return (
    <div style={{ fontSize: 22, textAlign: "center" }}>
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
