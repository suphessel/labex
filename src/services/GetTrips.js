import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { useState, useEffect } from "react";

const GetTrips = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/trips`)
      .then((response) => {
        // console.log(response.data.trips);
        setTrips(response.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return trips;
};

export default GetTrips;
