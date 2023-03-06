import { useState } from 'react'
import './App.css'
import chuck from './assets/chuc_desktop.svg'

function App() {
  return (
    <div className="App">
      <div id='container'>
      <h1 id='title'>Webapp API Chuck Norris</h1>
      <p id='paragraph'>Design di una pagina che utilizza la API di chucknorris.io per generare alla pressione di un pulsante una battuta del tipo che selezioni nel menu a tendina qui sotto.</p>
      <img id='chuck_img' src={chuck} alt="Beh, è chuck" />
      </div>
    </div>
  )
}

export default App
