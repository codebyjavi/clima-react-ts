import styles from './Weatherdetails.module.css'

type WeatherDetailsProps = {
    weather: {
        name: string;
        main: {
            temp: number;
            temp_max: number;
            temp_min: number;
        };
    }
}

export default function WeatherDetails({ weather } : WeatherDetailsProps) {
  return (
    <div  className={styles.weather}>WeatherDetails</div>
  )
}
