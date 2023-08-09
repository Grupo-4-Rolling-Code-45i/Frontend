import axios from "axios";

const reactToMyPizzaAPI = axios.create({
  baseURL : "https://backend-react-to-my-pizza.vercel.app/"
});

export default reactToMyPizzaAPI;