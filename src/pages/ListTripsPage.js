import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../constants/BASE_URL";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 220vh;
  gap: 15px;
  color: white;
  align-items: center;
  background-image: url("https://i.pinimg.com/originals/d8/d7/05/d8d705bfd0cd2b1e6a20beabb0f0546a.jpg");
  background-repeat: no-repeat;
  background-size: 110% 225vh;

  button {
    width: 10vw;
    height: 5vh;
    align-items: center;
    border-radius: 20px;
    padding: 5px;
    font-weight: bold;
    color: #000322;
    border: none;
    cursor: pointer;
    font-size: 14px;
    position: relative;
    bottom: 5px;

    :hover {
      color: white;
      background-color: #000322;
      cursor: pointer;
      border: none;
    }
  }
`;

const ContainerTrips = styled.div`
  display: flex;
  flex-direction: column;
  width: 45vw;
  border-radius: 10px;
  padding: 30px;
  background-color: #000322;
  filter: opacity(85%);
`;

const ListTripsPage = () => {
  const history = useHistory();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    GetTrips();
  }, []);

  const GetTrips = () => {
    axios
      .get(`${BASE_URL}/trips`)
      .then((response) => {
        console.log(response.data.trips);
        setTrips(response.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goToBack = () => {
    history.push("/");
  };

  const goToApplicationForm = () => {
    history.push("/trips/application");
  };

  return (
    <Container>
      <h2>Lista de Viagens</h2>
      {trips.map((trip) => {
        return (
          <ContainerTrips>
            <p>Nome: {trip.name}</p>
            <p>Data: {trip.date}</p>
            <p>Planeta: {trip.planet}</p>
            <p>Duração em Dias: {trip.durationInDays}</p>
            <p>Descrição da Viagem: {trip.description}</p>
          </ContainerTrips>
        );
      })}
      <button onClick={goToApplicationForm}>Inscreva-se</button>
      <button onClick={goToBack}>Voltar</button>
    </Container>
  );
};

export default ListTripsPage;
