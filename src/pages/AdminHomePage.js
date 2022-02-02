import React from "react";
import GetTrips from "../services/GetTrips";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 93vh;
  gap: 50px;
  color: white;
  align-items: center;
`;

const Button = styled.div`
display: flex;
 gap: 20px;

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
  
`;
const Trips = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
 
`;

const TripsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f8ff;
  box-shadow: 5px 5px #d3d3d3;
  border-radius: 20px;
  width: 20vw;
  height: 15vh;

  img{
    width: 10px;
  }

  :hover {
    color: white;
    background-color: #d3d3d3;
    cursor: pointer;
    border: none;
  }

  p {
    color: #000322;
  }
`;

const AdminHomePage = () => {
  const history = useHistory();

  const goToBack = () => {
    history.push("/");
  };

  const goToCreateTrip = () => {
    history.push("/admin/trips/create");
  };

  const goToLogout = () => {
    history.push("/login");
  };

  const trips = GetTrips();

  return (
    <Container>
      <h2>Painel Administrativo</h2>
      <Button>
        <button onClick={goToBack}>Voltar</button>
        <button onClick={goToCreateTrip}>Criar Viagem</button>
        <button onClick={goToLogout}>Logout</button>
      </Button>
      <Trips>
        {trips.map((trip) => {
          return (
            <TripsContainer>
              <Link to={`/admin/trips/${trip.id}`}>
                <p>{trip.name}</p>
              </Link>
              <button>
              <img src="https://image.flaticon.com/icons/png/512/18/18297.png" alt="lixeira"/>
              </button>
              
            </TripsContainer>
          );
        })}
      </Trips>
    </Container>
  );
};

export default AdminHomePage;
