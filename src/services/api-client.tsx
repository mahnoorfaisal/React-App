import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "571eccbe4abc480ab37236ab775a143c",
  },
});
