import React from "react";

const CandidateItem = (props) => {
  const approveCandidate = () => {
    props.decideCandidate(true, props.candidate.id);
  };
  const rejectCandidate = () => {
    props.decideCandidate(false, props.candidate.id);
  };

  return <div>
     {props.candidate.name}
      <button onClick={approveCandidate}>Aprovado</button>
      <button onClick={rejectCandidate}>Reprovado</button>
  </div>
};
export default CandidateItem;
