import { Container } from "@mui/material";
import React from "react";
import NewsCard from "../Newscard/NewsCard";
import "./NewsContent.css";
function NewsContent({newsArray, newsresult }) {
  // console.log(newsresult);
  return (
    <>
      <Container maxWidth="md">
        <div className="content">
          <div className="downloadMessage">
            <span className="downloadText">
            For the best experience use RapidNews app on your smartphone
            </span>
            <img
              alt="app store"
              height="80%"
              src="https://assets.inshorts.com/website_assets/images/appstore.png"
            />
            <img
              alt="play store"
              height="80%"
              src="https://assets.inshorts.com/website_assets/images/playstore.png"
            />
          </div>
          {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}
        {/* {
          loadmore <= newsresult && (
            <>
        <hr />
        <button className="loadMore" onClick={()=> setLoadmore (loadmore+10) }>Read More</button>
            
            </>
          ) 

        } */}
        </div>
      </Container>
    </>
  );
}

export default NewsContent;
