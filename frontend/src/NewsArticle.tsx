import React from "react";
import { MOBILE_WIDTH_THRESHOLD } from "./Constants";
import { newsArticleProp } from "./CustomTypes";
import Filler from "./Filler";
import { useMediaQuery } from "./useMediaQuery";

const NewsArticle = ({ blurb, image, link }: newsArticleProp) => {
  let renderFillers = useMediaQuery(MOBILE_WIDTH_THRESHOLD);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {!renderFillers && <Filler flexSize={1} />}
      <div
        className="news-container"
        style={{ display: "flex", flexDirection: "row", flex: 4 }}
      >
        <img
          src={image}
          alt="news article image"
          style={{
            flex: 1,
            width: "50px",
            height: "70px",
            margin: "1%",
            alignSelf: "center",
          }}
        ></img>
        <p className="paragraph" style={{ flex: 7 }}>
          <a href={link}>
            <em>
              {" > "}
              {blurb}
            </em>
          </a>
        </p>
      </div>
      {!renderFillers && <Filler flexSize={1} />}
    </div>
  );
};

export default NewsArticle;
