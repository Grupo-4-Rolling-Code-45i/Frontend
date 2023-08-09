import axios from "axios";

const reactToMyPizzaAPI = axios.create({
  baseURL: "localhost:4500",
});

 
export default reactToMyPizzaAPI;
