import "dotenv/config";
import express from "express";
const PORT = process.env.PORT || 8000;
const app = express();

// database Connection
import databaseConnection from "./src/dbConnection/dbConnect.js";
databaseConnection();

app.get("/", (req, res) => {
  res.json({ message: "You are in server Endpoint" });
});

app.listen(PORT, (err) => {
  err && console.log(err);
  console.log(`Server is running in http://localhost:${PORT}`);
});
