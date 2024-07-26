
import { SearchType } from "../types";
import axios from "axios";

export default function useWeather() {
    
    const fetchWeather = async (search : SearchType) => {

        const appId = import.meta.env.VITE_API_KEY
        
        try {
            const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`
            // Destructuring al resultado para acceder directamente a data
            const { data } = await axios(geoURL)
            
            console.log(data);
            
        } catch (error) {
            console.log(error);            
        }
    }
    
    return {
        fetchWeather
    }
}