import axios from "axios";

// const burgers = "/burgers/";

const burgers = "http://localhost:3001/burgers/";

export const fetchBurgers = async () => {
  const result = await axios.get(burgers);
  return result;
};
