import React from "react";
import ApodDetails from "./components/ApodDetails";
import "./App.css";
import styled from "styled-components"



const AppBG = styled.div`

background-image: radial-gradient( circle farthest-corner at -3.1% -4.3%,  rgba(57,255,186,1) 0%, rgba(21,38,82,1) 90% );
margin: 0;
padding: 50px;
text-align: center;

`;

const AppTitle = styled.h1`

font-weight: 800;
  color: transparent;
  font-size:120px;
  background: url("https://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/rainbow-nebula.jpg") repeat;
  background-position: 40% 50%;
  -webkit-background-clip: text;
  position:relative;
  text-align:center;
  line-height:200px;
  letter-spacing: -8px;
  margin: 0;
  

`;

function App() {
  return (
    <AppBG >
      <AppTitle> A.P.O.D </AppTitle>
      <ApodDetails />
    </AppBG>
  );
}

export default App;
