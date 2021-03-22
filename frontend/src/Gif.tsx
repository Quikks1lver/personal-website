import React from "react";
import { gifProp } from "./CustomTypes";
import { IPAD_WIDTH_THRESHOLD } from "./Constants";
import { useMediaQuery } from "./useMediaQuery";

/**
 * Neatly renders a Gif to the screen
 * @param param0 a gif prop, which needs a gif representing a filename to a video and alt text
 * @returns
 */
const Gif = ({ gif, altText }: gifProp) => {
  const isIpadOrSmaller = useMediaQuery(IPAD_WIDTH_THRESHOLD);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: ".5%",
        marginBottom: ".5%",
      }}
    >
      <img
        style={{ borderRadius: "15px" }}
        src={gif}
        alt={altText}
        width={isIpadOrSmaller ? "100%" : "50%"}
        height="50%"
      ></img>
    </div>
  );
};

export default Gif;
