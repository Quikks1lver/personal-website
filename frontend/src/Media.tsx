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
        marginTop: ".5%",
        marginBottom: ".5%",
      }}
    >
      <img
        style={{ borderRadius: "15px" }}
        src={media}
        alt={altText}
        width={determineWidth()}
        height="50%"
      ></img>
    </div>
  );
};

export default Media;
