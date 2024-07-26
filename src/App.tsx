import styles from './App.module.css'
import Form from './components/Form/Form'

function App() {

  return (
    <>
      <h1 className={styles.title}>Busque su clima</h1>

      <div className={styles.container}>
        <Form/>
      </div>

      <div className={styles.container}>
        <p>l</p>
      </div>
    </>
  )
}

export default App
