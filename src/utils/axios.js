import axios from "axios";

let instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // Correct spelling of baseURL
});

export default instance;
