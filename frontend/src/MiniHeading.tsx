import React from "react";

/**
 * A neat little heading component
 * @param param0 string representing the heading
 */
const MiniHeading = ({ heading }: { heading: string }) => {
  const styles: React.CSSProperties = {
    fontSize: 21,
    textAlign: "center",
  };
  return <h2 style={styles}>{`{ ${heading} }`}</h2>;
};

export default MiniHeading;
