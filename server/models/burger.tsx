import mongoose from "mongoose";

const burgerSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: String,
  description: String,
  image: String,
});

const Burger = mongoose.model("Burger", burgerSchema);

export default Burger;
