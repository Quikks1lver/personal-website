import React, { useState } from "react";
import { MOBILE_WIDTH_THRESHOLD } from "./Constants";
import { newsArticleProp } from "./CustomTypes";
import Filler from "./Filler";
import { useMediaQuery } from "./useMediaQuery";

const NewsArticle = ({ blurb, link }: newsArticleProp) => {
  let renderFillers = useMediaQuery(MOBILE_WIDTH_THRESHOLD);

  const [isHoveredUpon, setIsHoveredUpon] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {!renderFillers && <Filler flexSize={1} />}
      <div
        className={isHoveredUpon ? "hovered-news-container" : "news-container"}
        style={{ display: "flex", flexDirection: "row", flex: 1.5 }}
        onMouseEnter={() => setIsHoveredUpon(true)}
        onMouseLeave={() => setIsHoveredUpon(false)}
      >
        <p className="paragraph" style={{ flex: 7 }}>
          <a
            className="article-text-color"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>
              {" 📣 > "}
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
