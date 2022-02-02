import axios from "axios";
import { BASE_URL, headersToken } from "../constants/BASE_URL";
import { useState } from "react";
import useProtectedPage from "../hooks/UseProtectedPage";

const GetTripDetail = (id) => {
  const [tripDetail, setTripDetail] = useState();
  console.log("id", id);

  useProtectedPage();

  axios
    .get(`${BASE_URL}/trip/${id}`, headersToken)
    .then((response) => {
      console.log("RESPONSE DA GET TRIP DAETAIL", response.data.trip);
      setTripDetail(response.data.trip);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("TRIP DATAIL NA GET TRIP", tripDetail);
  return tripDetail;
};
export default GetTripDetail;
