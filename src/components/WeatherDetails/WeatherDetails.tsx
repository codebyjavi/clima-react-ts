import { Weather } from '../../hooks/useWeather'
import styles from './Weatherdetails.module.css'

type WeatherDetailsProps = {
    weather: Weather
}

export default function WeatherDetails({ weather } : WeatherDetailsProps) {
    console.log(weather);
    return (
        <div  className={styles.weather}>WeatherDetails</div>
    )
}
