import Burger from "../models/burger";

export const getBurgers = async (req, res) => {
  try {
    const burgers = await Burger.find();
    res.status(200).json(burgers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
