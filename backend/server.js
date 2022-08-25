import "dotenv/config";
import express from "express";
const app = express();
import cors from "cors";
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// database Connection
import databaseConnection from "./src/dbConnection/dbConnection.js";
databaseConnection();

// APIS

import registerLoginRouter from "./src/routers/registerlogin.js";

app.use("/api/v1/registerlogin", registerLoginRouter);

app.get("/", (req, res) => {
  res.json({ message: "You are in server Endpoint" });
});

// global error

app.use((error, req, res, next) => {
  const status = error.status || 404;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`Server is running in http://localhost:${PORT}`);
});
