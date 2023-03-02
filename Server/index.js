import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./Database/Db.js";
import route from "./Routes/Route.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", route);

Connection();

const PORT = 8000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
