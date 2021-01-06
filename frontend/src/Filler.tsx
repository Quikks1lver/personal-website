import React from "react";

/**
 * Div with adjustable flex
 */
const Filler = ({ flexSize }: { flexSize: number }) => {
  return <div style={{ flex: flexSize }}></div>;
};

export default Filler;
