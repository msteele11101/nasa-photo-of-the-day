import React from "react";
import styled from "styled-components";
import { Button } from 'reactstrap';

const NasaContainer = styled.div`
  background-image: radial-gradient( circle farthest-corner at -3.1% -4.3%,  rgba(57,255,186,1) 0%, rgba(21,38,82,1) 90% );
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5px;
  
`;
const NasaButton = styled.button`
  display: inline-block;
   padding: 4px 8px;
  background: black;
   border-radius: 2em;
   box-sizing: border-box;
   font-family: Actor;
   color: #ffffff;
   text-align: center;
`;
const NasaH1 = styled.h1`
color: transparent;
font-weight: 800
font-size:45px;
background: url("https://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/rainbow-nebula.jpg") repeat;
background-position: 40% 50%;
-webkit-background-clip: text;
position:relative;
text-align:center;
letter-spacing: .009em;
margin: 0;
`;
const NasaH2 = styled.h2`


`;

const NasaImge = styled.img`
  width: 400px;
  height: 400px;
`;

const NasaText = styled.p`
font-family: Bubblegum Sans;
  font-size: 22px;
  margin: 10px;
  padding: 10px;
  color: white;
`;

const NasaInput = styled.input`
  background: lightgrey;
  font-size: 18px;
  border-style: dotted;
  font-family: Actor;
`;

const ApodCard = props => {
  console.log("testing", props);

  return (
    <NasaContainer className="container">
      <div className="header">
        <NasaH1>{props.title}</NasaH1>
        <NasaText>Photo of the day date: {props.date}</NasaText>
        <NasaText>
          Select a new date:{" "}
          <NasaInput
            type="date"
            id="photoDate"
            min="1995-06-16"
            max="2025-12-31"
          ></NasaInput>
          <Button color="danger">Danger!</Button>
        </NasaText>
      </div>
      <div className="apod-card">
        <NasaImge className="apod-image" alt={props.title} src={props.Img} />
        <h2>{props.title}</h2>
        <h3>Photo Explanation</h3>
        <NasaText>{props.explanation}</NasaText>
      </div>
    </NasaContainer>
  );
};
export default ApodCard;
