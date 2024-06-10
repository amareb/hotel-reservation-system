# Hotel Reservation System

A simple hotel reservation system built with Node.js, Express, MySQL, and React.js.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a simple hotel reservation system that allows users to make reservations, view existing reservations, and manage them. The system consists of a backend built with Node.js and Express, and a frontend built with React.js.

## Features

- Add a new reservation
- View all reservations
- Responsive and user-friendly interface

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- MySQL

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/hotel-reservation-system.git
    cd hotel-reservation-system/backend
    ```

2. Install the required npm packages:

    ```bash
    npm install
    ```

3. Set up the MySQL database:

    ```sql
    CREATE DATABASE hotel_db;
    USE hotel_db;

    CREATE TABLE reservations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      date DATE NOT NULL,
      roomType VARCHAR(255) NOT NULL
    );
    ```

4. Create a `db.js` file in the `backend` directory with your database connection details:

    ```javascript
    const mysql = require('mysql2');

    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'your-password',
      database: 'hotel_db'
    });

    connection.connect((err) => {
      if (err) throw err;
      console.log('Connected to MySQL database.');
    });

    module.exports = connection;
    ```

5. Start the backend server:

    ```bash
    node index.js
    ```

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd ../frontend
    ```

2. Install the required npm packages:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

## Usage

To use the hotel reservation system, follow these steps:

1. Ensure that the backend server is running.
2. Open a web browser and navigate to `http://localhost:3000`.
3. Use the form to add new reservations and view the existing reservations.

## Technologies Used

- **Backend**: Node.js, Express, MySQL
- **Frontend**: React.js, Axios

## Project Structure

```plaintext
hotel-reservation-system/
├── backend/
│   ├── db.js
│   ├── index.js
│   └── routes/
│       └── reservations.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── components/
│   │       ├── ReservationForm.js
│   │       └── ReservationList.js
│   ├── package.json


MIT License

Copyright (c) 2024 [Amare Biyabeyin]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
