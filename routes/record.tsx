import express from "express";

const recordRoutes = express.Router();

const dbo = require("../db/conn");

recordRoutes.route("/record").get((res, req) => {
  let db_connect = dbo.getOb("employees");
  db_connect.collection("records").find;
});
