import { useState } from "react"


const SinglePokemon = ({singlePokeName, setSinglePokeName}) => {
    const [singlePoke, setSinglePoke] = useState({})
    const getSinglePokemon = async ()=> {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${singlePokeName}`)
        const result = await response.json()
        setSinglePoke(result)
    }
getSinglePokemon()

return (

    <>
    <div id="detail">
    <h2>{singlePoke.name}</h2>
    <h3>Height: {singlePoke.height}</h3>
    <h3>Weight: {singlePoke.weight}</h3>
    {!singlePoke.sprites? <h3>Loading</h3>:<img src= {singlePoke.sprites.front_default}height={'100px'} width={'100px'}/>}
    <div id = "special-data">
        <div className="single-data">
            <h3>Abilities </h3>
            {!singlePoke.abilities? <p>Loading</p>: singlePoke.abilities.map((aby) => {
            return <p key={aby.ability.name}>{aby.ability.name}</p>
        })}
        </div>
        <div className="single-data">
            <h3>Moves</h3>
            {!singlePoke.moves? <p>Loading</p>: singlePoke.moves.map((mov) => {
            return <p key={mov.move.name}>{mov.move.name}</p>
        })}

        </div>
    </div>
    <button onClick={() => setSinglePokeName(null)}>Back</button>
    </div>
    </>
)

}


export default SinglePokemon