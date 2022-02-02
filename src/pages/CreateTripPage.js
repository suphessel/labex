import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/UseForm";
import axios from "axios";
import { BASE_URL, headers } from "../constants/BASE_URL";
import useProtectedPage from "../hooks/UseProtectedPage";
import { KeyboardDatePicker } from "@material-ui/pickers";

const ContainerForms = styled.div`
  display: flex;
  width: 100%;
  height: 93vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

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

const CreateTripPage = (props) => {
  const { form, onChange } = useForm({
    name: "",
    planet: "",
    description: "",
    durations: "",
  });

  useProtectedPage();

  const history = useHistory();

  const [date, setDate] = useState(new Date());

  const CreateTripForm = (event) => {
    event.preventDefault();
    console.log("Viagem adicionada com sucesso *-* ");
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;

    const body = {
      name: form.name,
      planet: form.planet,
      date: formattedDate,
      description: form.description,
      durationInDays: form.durationInDays,
    };

    axios
      .post(`${BASE_URL}/trips`, body, headers)
      .then((response) => {
        console.log("Certo: ", response);
        alert("Viagem adicionada com sucesso *-* ");
      })
      .catch((err) => {
        console.log("Errado: ", err.data);
        alert("Preencha os campos")
      });
  };

  const goToBack = () => {
    history.push("/admin/trips/list");
  };

  return (
    <ContainerForms>
      <h2>Criar Viagem</h2>
      <form onSubmit={CreateTripForm}>
        <label>
          <input
            name="name"
            type="name"
            value={form["name"]}
            placeholder="Nome"
            onChange={onChange}
            required
          />
          <select name="planet" value={form["planet"]} onChange={onChange}>
            <option>Escolha um Planeta</option>
            <option>Mercúrio</option>
            <option>Vênus</option>
            <option>Terra</option>
            <option>Marte</option>
            <option>Júpiter</option>
            <option>Saturno</option>
            <option>Urânio</option>
            <option>Netuno</option>
            <option>Plutão</option>
          </select>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            label="Data"
            value={date}
            onChange={(date) => setDate(date)}
          />
          <input
            name="description"
            type="text"
            value={form["description"]}
            placeholder="Descrição"
            onChange={onChange}
          />
          <input
            name="duration"
            type="number"
            value={form["duration"]}
            placeholder="Duração em Dias"
            onChange={onChange}
          />
        </label>
        <button onClick={CreateTripForm}>Criar</button>
        <button onClick={goToBack}>Voltar</button>
      </form>
    </ContainerForms>
  );
};

export default CreateTripPage;
