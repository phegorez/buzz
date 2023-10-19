import axios from "axios";

const axiosClient = axios.create({
    baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/'
})

export default axiosClient