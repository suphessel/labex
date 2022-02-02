import React from "react";
// import axios from "axios";
import styled from "styled-components";
import Router from "./route/Router";


const AppContainer = styled.div`
display: block;
width: 100%;

`

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #000322;
  height: 7vh;
  color: white;
  font-size: 17px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
 
`

 const App = () => {
  return (
    <AppContainer>
      <Title>
      <h2>LABE-X</h2>
      </Title>
   
      <Router/>
    </AppContainer>
  );
}

export default App;
