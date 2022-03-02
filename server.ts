import express from "express";
import mongoose from "mongoose";

const dbUrl =
  "mongodb+srv://aujourdui:b50HX3xdE9QF6x4V@cluster0.lfbkc.mongodb.net/burger-data"; // dbの名前をcrudに指定

const app = express();
const port = 3001;

mongoose.connect(dbUrl, (dbErr: any) => {
  if (dbErr) throw new Error(dbErr);
  else console.log("db connected");
  app.listen(port, function () {
    console.log("Server is running on port 3001");
  });
});
