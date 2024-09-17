import React, { useState, useEffect } from "react";
import axios from "axios";
import ApodCard from "./ApodCard";
export default function ApodDetails() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=alZhUqSGfQrfzjCQQAIKQB1VvOqZopnlruwe5HXu&date=2019-11-19"
      )
      .then(response => {
        console.log(response.data);
        setNasaData(response.data);
      })
      .catch(error => {
        console.log("Something went wrong data not returned", error);
      });
  }, []);

  return (
    <div className="entry">
      <ApodCard
        date={nasaData.date}
        title={nasaData.title}
        explanation={nasaData.explanation}
        Img={nasaData.url}
      />
    </div>
  );
}
