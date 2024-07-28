import { Weather } from '../../hooks/useWeather'
import styles from './Weatherdetails.module.css'

type WeatherDetailsProps = {
    weather: Weather
}

export default function WeatherDetails({ weather } : WeatherDetailsProps) {

    const { main: {temp, temp_max, temp_min}, name } = weather

    return (
        <section className={styles.container}>
            <div className={styles.weather}>
                <h3>Clima de {name}</h3>
                <p>{Math.round(temp)}&deg;C</p>
                <div>
                    <span>Max: {Math.round(temp_max)}&deg;C</span>
                    <span>Min: {Math.round(temp_min)}&deg;C</span>
                </div>
            </div>
        </section>
    )
}
