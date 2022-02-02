import React from "react";
// import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 93vh;
  justify-content: center;
  justify-items: center;
  align-items: center;
  gap: 150px;
  background-repeat: no-repeat;
  background-image: url(${"https://wallpaperaccess.com/full/1510313.jpg"});
  background-size: 100vw 100vh ;
  margin: none;
  filter: opacity(50%);
  filter: brightness(90%);

  button {
    width: 20vw;
    height: 10vh;
    background-color: white;
    border-radius: 50px;
    border: none;
    font-size: 20px;
    filter: opacity(80%);
    color: #000322;
    

    :hover{
      cursor: pointer;
      background-color:#01074A;
      color: white;
      filter: opacity(70%);
    }
  }
`;

const HomePage = () => {
  const history = useHistory();

  const goToTripList = () => {
    history.push("/trips/list");
  };

  const goToLoginPage = () => {
    history.push("/login");
  };

  return (
    <HomeContainer>
      <div>
        <button onClick={goToTripList}>Lista de Viagens</button>
      </div>
      <div>
        <button onClick={goToLoginPage}>Área do Administrador</button>
      </div>
    </HomeContainer>
  );
};

export default HomePage;
