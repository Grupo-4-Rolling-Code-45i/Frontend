import axios from "axios";

const reactToMyPizzaAPI = axios.create({
  baseURL: "https://backend-react-to-my-pizza-git-development-grupo4-45i.vercel.app/",
});

 
export default reactToMyPizzaAPI;
