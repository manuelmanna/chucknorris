import { useState } from 'react'
import './App.css'
import chuck from './assets/chuc_desktop.svg'
import CategorySelector from './components/CategorySelector'

function App() {
  const [categories, setCategories] = useState([])

  function RenderCategories(){
    if(categories.length === 0){
      let url = 'https://api.chucknorris.io/jokes/categories'

    let promise = fetch(url)

    promise.then(
        response => response.json()
    ).then(
        data => {
          data.forEach(element => {
            setCategories((categories) => [...categories, element]);
            
          });
        }
    )
    }
  }

  return (
    <div className="App">
      <div id='container'>
      <h1 id='title'>Webapp API Chuck Norris</h1>
      <p id='paragraph'>Design di una pagina che utilizza la API di chucknorris.io per generare alla pressione di un pulsante una battuta del tipo che selezioni nel menu a tendina qui sotto.</p>
      <img id='chuck_img' src={chuck} alt="Beh, è chuck" />
      <CategorySelector categories={categories} clbk={RenderCategories} />
      </div>
    </div>
  )
}

export default App
