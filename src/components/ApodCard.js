import React from "react";

const ApodCard = props => {
  console.log("testing", props);

  return (
    <div className="apod-card">
      <img className="apod-image" alt="apod" src={props.Img} />
      <h2>{props.title}</h2>
      <p>{props.explanation}</p>
    </div>
  );
};
export default ApodCard;
