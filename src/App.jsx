import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Integrantes from './components/integrantes'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Integrantes
      titulo1 = "Objetivos"
      parrafo1 = "Nuestro principal objetivo es enseñar a través de un juego el correcto uso del semáforo y aquellas multas y sanciones que se puedan dar por su incumplimiento para crear conciencia, enseñar y reforzar este valor tan importante en el ámbito del tránsito"
      titulo2 = "Significado marca"
      subtitulo1 = "Nombre:"
      parrafo2 = "Quisimos utilizar para el nombre una palabra que fuera de fácil recordación, pero a su vez tuviera un significado estrechamente relacionado con nuestro tema principal; por eso decidimos utilizar la palabra Titilar que es la función principal de un semáforo en las calles."
      subtitulo2 = "Logo"
      />
      <Footer/>
    </div>
  )
}

export default App
