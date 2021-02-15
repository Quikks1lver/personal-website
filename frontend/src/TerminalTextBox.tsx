import React from "react";

/**
 * A neat "text box" with paragraphs (the param)
 * @param param0 an array of strings, representing paragraphs
 */
const TerminalTextBox = ({ paragraphs }: { paragraphs: string[] }) => {
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
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div className="paragraph-container">{renderParagraphs(paragraphs)}</div>
    </div>
  );
};

export default TerminalTextBox;
