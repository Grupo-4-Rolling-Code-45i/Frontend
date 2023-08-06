import axios from "axios";

const reactToMyPizzaAPI = axios.create({
  baseURL: "http://localhost:4500/",
});


// reactToMyPizzaAPI.interceptors.request.use((config)=>{
//     config.headers={ "x-token": localStorage.getItem("token"),   };
//     return config;
// })


export default reactToMyPizzaAPI;