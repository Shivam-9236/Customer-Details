import express from "express";
import connection from "./databse/db.js";
import dotenv from "dotenv";
import Routes from "./routes/route.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Routes);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const PORT = 8000;

connection(username, password);

app.listen(PORT, () => console.log(`running`));
