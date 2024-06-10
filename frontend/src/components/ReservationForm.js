// src/components/ReservationForm.js
import React, { useState } from "react";
import axios from "axios";
import "./ReservationForm.css";

const ReservationForm = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [roomType, setRoomType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/reservations", { name, date, roomType })
      .then((response) => {
        console.log(response.data);
        setName("");
        setDate("");
        setRoomType("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Date: </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label>Room Type: </label>
        <input
          type="text"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
        />
      </div>
      <button type="submit">Make Reservation</button>
    </form>
  );
};

export default ReservationForm;
