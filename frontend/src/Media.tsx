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
  smallScreenPictureWidthPercentage,
  caption,
}: mediaProp) => {
  const isIpadOrSmaller = useMediaQuery(IPAD_WIDTH_THRESHOLD);

  /**
   * converts widths to width css strings
   * @param width
   * @returns
   */
  const stringifyWidth = (width: number): string => {
    return width.toString() + "%";
  };

  /**
   * Determines the correct width for the media
   * @returns string representing desired width
   */
  const determineWidth = (): string => {
    if (isIpadOrSmaller) {
      if (smallScreenPictureWidthPercentage !== undefined)
        return stringifyWidth(smallScreenPictureWidthPercentage);
      else return "100%";
    } else if (largeScreenPictureWidthPercentage !== undefined)
      return stringifyWidth(largeScreenPictureWidthPercentage);
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
