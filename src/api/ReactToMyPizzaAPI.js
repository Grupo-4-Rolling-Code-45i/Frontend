import axios from "axios";

// Reemplazar por variable de entorno

const reactToMyPizzaAPI = axios.create({
  baseURL : 'https://backend-react-to-my-pizza-git-feature-agregarcarrito-grupo4-45i.vercel.app/'
});

export default reactToMyPizzaAPI;