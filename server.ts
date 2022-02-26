import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 5000;
dotenv.config({ path: "./config.env" });

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

// import dbo from "./db/conn";
const dbo = require("./db/conn");

app.listen(port, () => {
  dbo.connectToServer(function (err: any) {
    if (err) console.error(err);
  });
  console.log(`listening on port ${port}`);
});
