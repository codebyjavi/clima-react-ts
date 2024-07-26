import styles from './App.module.css'
import Form from './components/Form/Form'
import WeatherDetails from './components/WeatherDetails/WeatherDetails'
import useWeather from './hooks/useWeather'

function App() {

  const { weather, fetchWeather } = useWeather()


  return (
    <>
      <h1 className={styles.title}>Busque su clima</h1>

      <section className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
      </section>
      <WeatherDetails
        weather={weather}
      />
    </>
  )
}

export default App
