import React from "react";
import MiniHeading from "./MiniHeading";
import NewsArticle from "./NewsArticle";
import newsInfo from "./NewsInfo";

const News = () => {
  const displayArticles = (): JSX.Element[] => {
    var output: JSX.Element[] = [];
    newsInfo.forEach((article) => {
      var success = true;

      // from stack overflow -- check if the link exists
      var request = new XMLHttpRequest();
      request.open("GET", article.link, true);
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 404) {
            success = false;
          }
        }
      };

      if (success) {
        output.push(
          <NewsArticle
            blurb={article.blurb}
            image={article.image}
            link={article.link}
          />
        );
      }
    });

    return output;
  };

  return (
    <div>
      <MiniHeading heading={"News Links"} />
      {displayArticles()}
    </div>
  );
};

export default News;
