import React from "react";
import CandidateItem from "./CandidateItem";

const CandidatesList = (props) => {
  console.log("PROPS DO CANDIDATES LIST", props.candidates)
  return (
    <div>
      <h2>Lista de Candidatos</h2>
      {props.candidates.map(candidate => {
        return (
          <CandidateItem
            candidate={candidate}
            decideCandidate={props.decideCandidate}
          />
        );
      })}
    </div>
  );
};

export default CandidatesList;
