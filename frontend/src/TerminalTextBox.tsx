import React from "react";
import { MOBILE_WIDTH_THRESHOLD } from "./Constants";
import Filler from "./Filler";
import { useMediaQuery } from "./useMediaQuery";

/**
 * A neat "text box" with paragraphs (the param)
 * @param param0 an array of strings, representing paragraphs
 */
const TerminalTextBox = ({ paragraphs }: { paragraphs: string[] }) => {
  let renderFillers = useMediaQuery(MOBILE_WIDTH_THRESHOLD);

  const renderParagraphs = (paragraphs: string[]): JSX.Element[] => {
    var jsxParas: JSX.Element[] = [];
    paragraphs.forEach((p) => {
      jsxParas.push(
        <p className="paragraph">
          {">"} {p}
        </p>
      );
    });
    return jsxParas;
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {!renderFillers && <Filler flexSize={1} />}
      <div className="paragraph-container">{renderParagraphs(paragraphs)}</div>
      {!renderFillers && <Filler flexSize={1} />}
    </div>
  );
};

export default TerminalTextBox;
