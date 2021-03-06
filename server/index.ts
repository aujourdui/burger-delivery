import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import burgerRoutes from "./routes/burgers";

dotenv.config();
const env = process.env;
const port = env.port || 5000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/burgers", burgerRoutes);

app.get("/test", (_req, res) => {
  res.json({
    author: "test",
    message: "server test",
  });
});

mongoose.connect(env.CONNECTION_URL, (dbErr: any) => {
  if (dbErr) throw new Error(dbErr);
  else console.log("db connected");
  app.listen(port, function () {
    console.log(`Server is running on ${port}`);
  });
});
