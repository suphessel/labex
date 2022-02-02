import React from "react";
import TripInfoItem from "./TripInfoItem";

const TripInfoCards = (props) => {
  const { name, planet, descriptions, date, durationsInDays } = props;
  return (
    <div>
      <h2>Informações da Viagem</h2>
      <div>
        <TripInfoItem infoName={"Nome"} info={name} />
        <TripInfoItem infoName={"Planeta"} info={planet} />
        <TripInfoItem infoName={"Data"} info={date} />
        <TripInfoItem infoName={"Descrição"} info={descriptions} />
        <TripInfoItem infoName={"Duração em Dias"} info={durationsInDays} />
      </div>
    </div>
  );
};

export default TripInfoCards;
