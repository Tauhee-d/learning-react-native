import React, { useState } from "react";
import axios from "axios";

function FetchNews() {
  const [news, setNews] = useState([]);
  const currentNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=8ea9439e225d413dbd0f2c595767ddee"
      )
      .then((res) => {
        console.log(res);
        setNews(res.data.articles);
      });
  };
  return (
    <>
      <div className="container">
        
        <button className="btn btn-primary" onClick={currentNews}>
          FetchNews
        </button>
        </div>
        <div className="container">
        <div className="row ">
          
            {news.map((value) => {
              return (
                <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <a href={value.url} className="btn btn-primary">
                      know More
                    </a>
                  </div>
                </div>
                </div>
              );
            })}
          
        </div>
        </div>
      
    </>
  );
}

export default FetchNews;