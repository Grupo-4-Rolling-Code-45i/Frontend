import axios from "axios";

const reactToMyPizzaAPI = axios.create({
  baseURL: "http://localhost:4500",
});

 
export default reactToMyPizzaAPI;
