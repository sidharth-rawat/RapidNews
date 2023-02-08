import React from "react";
import "./NewsCaed.css";

function NewsCard({ newsItem }) {
  console.log(newsItem);
  return (
    <div className="newsCard">
      <img
        src={
          newsItem.imageUrl
            ? newsItem.imageUrl
            : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"
        }
        alt={newsItem.title}
        className="newsImage"
      />
      <div className="newsText">
        <div>
          <span className="title">{newsItem.title}</span>
          <br />
          <span className="author">
            <a href={newsItem.url} target="__blank">
              <b>short</b>
            </a>{" "}
            <span className="muted">
              {" "}
              by
              {" "}
              {newsItem.author ? newsItem.author : "unknown"}, {" "}
              {
                newsItem.date
              }
              {" "}
              {
                newsItem.time
              }
            </span>
          </span>
          <div className="lowerNewsText">
            <div className="description">{newsItem.content}</div>
            <span className="readmore">
              Read More at{" "}
              <a href={newsItem.url} target="__blank" className="source">
                <b>{newsItem.readMoreUrl ? newsItem.readMoreUrl:"unknown"}</b>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
