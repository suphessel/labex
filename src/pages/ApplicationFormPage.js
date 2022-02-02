import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router";
import { BASE_URL, headers } from "../constants/BASE_URL";
import  useForm from "../hooks/UseForm";
import GetTrips from "../services/GetTrips";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 93vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-image: url("https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:46992?quality=0.8&format=jpg&width=1440&height=810&.jpg");
  background-repeat: no-repeat;
  background-size: 100%;

  h2 {
    color: #000322;
  }

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
    :hover {
      color: white;
      background-color: #000322;
      cursor: pointer;
      border: none;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    box-shadow: 5px 5px gray;
    padding: 40px;
    border: 2px solid #d3d3d3;
    gap: 20px;
    filter: opacity(85%);
    background-color: white;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 30vw;
  }

  input {
    border: none;
    border-bottom: 1px solid #000322;
  }
  select {
    border: none;
    border-bottom: 1px solid #000322;
  }
`;

const ApplicationFormPage = () => {
  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    trip: "",
  });

  const ApplyToTrip = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };
    axios
      .post(`${BASE_URL}/trips/${form.trip.id}/apply`, body, headers)
      .then((response) => {
        console.log(response);
        alert("Inscrição enviada com sucesso *-* ");
        cleanFields()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const history = useHistory();

  const goToBack = () => {
    history.push("/trips/list");
  };

  const trips = GetTrips();

  return (
    <Container>
      <h2>Inscreva-se para uma Viagem</h2>
      <div>
        <form onSubmit={ApplyToTrip}>
          <label>
            <select onChange={onChange} value={form.trip} name={"trip"}>
              <option>Escolha uma viagem</option>
              {trips.map((trip) => {
                return (
                  <option key={trip.id} value={trip.id}>
                    {trip.name}
                  </option>
                );
              })}
            </select>
            <input
              name="name"
              value={form.name}
              placeholder={"Nome"}
              onChange={onChange}
              required
            />
            <input
              name="age"
              value={form.age}
              placeholder={"Idade"}
              onChange={onChange}
              required
            />
            <input
              name="applicationText"
              value={form.applicationText}
              placeholder={"Texto de Candidatura"}
              onChange={onChange}
              required
            />
            <input
              name="profession"
              value={form.profession}
              placeholder={"Profissão"}
              onChange={onChange}
              required
            />
            <select name={"country"} value={form.country} onChange={onChange}>
              <option>Escolha um País</option>
              <option>África do Sul</option>
              <option value="Albânia">Albânia</option>
              <option value="Alemanha">Alemanha</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antigua">Antigua</option>
              <option value="Arábia Saudita">Arábia Saudita</option>
              <option value="Argentina">Argentina</option>
              <option value="Armênia">Armênia</option>
              <option value="Aruba">Aruba</option>
              <option value="Austrália">Austrália</option>
              <option value="Áustria">Áustria</option>
              <option value="Azerbaijão">Azerbaijão</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrein">Bahrein</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Bélgica">Bélgica</option>
              <option value="Benin">Benin</option>
              <option value="Bermudas">Bermudas</option>
              <option value="Botsuana">Botsuana</option>
              <option value="Brasil">Brasil</option>
            </select>
          </label>
          <button>Enviar</button>
          <button onClick={goToBack}>Voltar</button>
        </form>
      </div>
    </Container>
  );
};

export default ApplicationFormPage;
