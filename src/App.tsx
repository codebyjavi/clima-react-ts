import styles from './App.module.css'
import Alert from './components/Alert/Alert'
import Form from './components/Form/Form'
import Spinner from './components/Spinner/Spinner'
import WeatherDetails from './components/WeatherDetails/WeatherDetails'
import useWeather from './hooks/useWeather'

function App() {

  const { weather, notFound, loading, fetchWeather, hasWeatherData } = useWeather()

  return (
    <>
      <h1 className={styles.title}>Busque su clima</h1>

      <section className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
      </section>

      {loading && (<Spinner/>)}

      {hasWeatherData && (<WeatherDetails weather={weather}/>)}
      {notFound && (
        <div className={styles.container}>
    		<Alert>Ciudad no encontrada</Alert>
        </div>
    )}
      
    </>
  )
}

export default App
