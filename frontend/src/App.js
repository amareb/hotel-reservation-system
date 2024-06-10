// src/App.js
import React from "react";
import "./App.css";
import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationList";

function App() {
  return (
    <div className="App">
      <h1>Hotel Reservation System</h1>
      <ReservationForm />
      <ReservationList />
    </div>
  );
}

export default App;
