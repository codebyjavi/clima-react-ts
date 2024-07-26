import styles from './App.module.css'
import Form from './components/Form/Form'

function App() {

  return (
    <>
      <h1 className={styles.title}>Busque su clima</h1>

      <section className={styles.container}>
        <Form/>
      </section>

      <section className={styles.container}>
        <p>l</p>
      </section>
    </>
  )
}

export default App
