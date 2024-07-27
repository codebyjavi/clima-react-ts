import { Weather } from '../../hooks/useWeather'
import styles from './Weatherdetails.module.css'

type WeatherDetailsProps = {
    weather: Weather
}

export default function WeatherDetails({ weather } : WeatherDetailsProps) {

    const { main: {temp, temp_max, temp_min}, name } = weather

    return (
        <section  className={styles.weather}>
            <h3>{name}</h3>
            <h3>{Math.round(temp)}</h3>
            <h3>{Math.round(temp_max)}</h3>
            <h3>{Math.round(temp_min)}</h3>
        </section>
    )
}
