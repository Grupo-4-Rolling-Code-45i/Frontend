import axios from "axios";

// Reemplazar por variable de entorno

const reactToMyPizzaAPI = axios.create({
  baseURL: "http://localhost:4500/",
});

export default reactToMyPizzaAPI;
