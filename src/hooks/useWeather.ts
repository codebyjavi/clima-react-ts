
import { SearchType } from "../types";
import axios from "axios";

export default function useWeather() {
    
    const fetchWeather = async (search : SearchType) => {

        const appId = import.meta.env.VITE_API_KEY
        
        try {
            const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`
            // Destructuring al resultado para acceder directamente a data
            const { data } = await axios(geoURL)
            
            const lat = data[0].lat
            const lon = data[0].lon

            const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            const weather = await axios(weatherURL)
            console.log(weather.data);
                
            
        } catch (error) {
            console.log(error);            
        }
    }
    
    return {
        fetchWeather
    }
}