import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import GetTripDetail from "../../services/GetTripDetail";
import useProtectedPage from "../../hooks/UseProtectedPage";
import TripInfoCards from "./TripInfoCard";
import { useParams } from "react-router-dom";
import CandidatesList from "./CandidatesList";
import { BASE_URL, headers } from "../../constants/BASE_URL";
import axios from "axios"
import { DomainPropTypes } from "@material-ui/pickers/constants/prop-types";

const TripCard = styled.div`
width: 100%;
height: 93vh;
gap: 50px;
display: flex;
flex-direction: column;
justify-content: center;
justify-items: center;
align-items: center;
color: #000322;

button{
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

`

const TripDetailsPage = async () => {
  useProtectedPage();

  const history = useHistory();
  const params = useParams();

  const goToBack = () => {
    history.push("/admin/trips/list");
  };

  const decideCandidate = (approve, candidateId) => {
    const body = {
      approve: approve
    }
    axios
    .put(`${BASE_URL}/trips/${params.tripId}/candidates/${candidateId}/decide`, body, headers)
    .then(() => {
      GetTripDetail()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const tripDetail = await GetTripDetail(params.id);
  console.log("TRIP DATAIL", tripDetail)
  return (
    <TripCard>
      <TripInfoCards
        name={tripDetail.name}
        planet={tripDetail.planet}
        descriptions={tripDetail.descriptions}
        date={tripDetail.date}
        durationsInDays={tripDetail.durationsInDays}
      />
      <h2>Lista de Candidatos</h2>
      <CandidatesList
      candidates={tripDetail.candidates}
      decideCandidate={decideCandidate}
      />
      <button onClick={goToBack}>Voltar</button>
    </TripCard>
  );
};

export default TripDetailsPage;
