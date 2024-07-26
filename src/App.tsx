import styles from './App.module.css'
import Form from './components/Form/Form'
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
      
    </>
  )
}

export default App
