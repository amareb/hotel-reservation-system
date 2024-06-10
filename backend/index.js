// index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const reservationRoutes = require("./routes/reservations");

const app = express();
const PORT = 8888;

app.use(bodyParser.json());
app.use(cors());
app.use("/reservations", reservationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
 