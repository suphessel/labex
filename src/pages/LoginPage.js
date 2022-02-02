import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router";
import { BASE_URL } from "../constants/BASE_URL";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 93vh;
  gap: 20px;
  color: white;
  align-items: center;
  background-repeat: no-repeat;
  background-size: 100% 93vh;
  background-image: url("https://cdn.wallpapersafari.com/22/47/AEpOCZ.jpg");

  h2{
    position: relative;
    top: 100px
  }


  label {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 20vw;
    height: 25vh;
    padding: 35px;
    background-color: #000322;
    filter: opacity(80%);
    align-items: center;
    border-radius: 10px;
    position: relative;
    top: 100px
  }

  input {
    width: 15vw;
    padding: 5px;
  }

  button {
    width: 5vw;
    align-items: center;
    border-radius: 20px;
    padding: 5px;
    font-weight: bold;
    color: #000322;
    border: none;

    :hover {
      color: white;
      background-color: #000322;
      cursor: pointer;
      border: none;
    }
  }
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const goToAdminPage = () => {
    const body = {
      email: email,
      password: password,
    };

    axios
      .post(`${BASE_URL}/login`, body)
      .then((response) => {
        console.log("Certo: ", response.data.token);
        localStorage.setItem("token", response.data.token);
        history.push("/admin/trips/list");
      })
      .catch((err) => {
        console.log("Errado: ", err.response);
        alert("Insira seus dados para efetuar login.");
      });
  };

  const goToBack = () => {
    history.push("/");
  };

  return (
    <Container>
      <h2>Área do Administrador</h2>
      <label>
        <input
          type="email"
          value={email}
          placeholder="e-mail"
          onChange={onChangeEmail}
        />
        <input
          type="password"
          value={password}
          placeholder="senha"
          onChange={onChangePassword}
        />
        <button onClick={goToAdminPage}>Login</button>
        <button onClick={goToBack}>Voltar</button>
      </label>
    </Container>
  );
};

export default LoginPage;

// "success": true,
// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI1UkFvcW1DYVRvdWxTbFhFYzhsIiwiZW1haWwiOiJzdWgtYXN0cm9kZXZAZ21haWwuY29tLmJyIiwiaWF0IjoxNjI1Njg3MTgxfQ.3xvMpDu2xQpiPYIS7XXkV3n_UInAVwMS7wc-RB3VFSE",
// "user": {
//     "id": "b5RAoqmCaToulSlXEc8l",
//     "email": "suh-astrodev@gmail.com.br"
