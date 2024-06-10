// src/components/ReservationList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/reservations")
      .then((response) => setReservations(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Reservations</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            {reservation.name} - {reservation.date} - {reservation.roomType}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;
