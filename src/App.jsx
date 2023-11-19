import { useState } from 'react'
import './App.css'
import AllPokemon from './components/AllPokemon'
import SinglePokemon from './components/SinglePokemon'

function App() {
  const [singlePokeName, setSinglePokeName] = useState(null)

  return (
    <>
      {singlePokeName? <SinglePokemon singlePokeName={singlePokeName} setSinglePokeName={setSinglePokeName}/>:
        <AllPokemon setSinglePokeName={setSinglePokeName}/>
      }
    </>
  )
}

export default App
