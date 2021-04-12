import React from "react";
import { mediaProp } from "./CustomTypes";
import { IPAD_WIDTH_THRESHOLD } from "./Constants";
import { useMediaQuery } from "./useMediaQuery";

/**
 * Neatly renders a photo, gif, etc. to the screen
 * @param param0 a media prop, which needs a filename, altText, and an optional size for large screens
 * @returns
 */
const Media = ({
  media,
  altText,
  largeScreenPictureWidthPercentage,
  caption,
}: mediaProp) => {
  const isIpadOrSmaller = useMediaQuery(IPAD_WIDTH_THRESHOLD);

  /**
   * Determines the correct width for the media
   * @returns string representing desired width
   */
  const determineWidth = (): string => {
    if (isIpadOrSmaller) return "100%";
    if (largeScreenPictureWidthPercentage !== undefined)
      return largeScreenPictureWidthPercentage.toString() + "%";
    else return "50%";
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "1%",
        marginBottom: "1%",
      }}
    >
      <img
        style={{ borderRadius: "15px" }}
        src={media}
        alt={altText}
        width={determineWidth()}
        height="50%"
      ></img>
      {caption !== undefined && (
        <h5 style={{ marginTop: "0%" }}>
          {" "}
          <em>{caption}</em>
        </h5>
      )}
    </div>
  );
};

export default Media;
