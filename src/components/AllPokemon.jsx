import { useState } from "react"


const AllPokemon = ({setSinglePokeName}) => {

    const [allPoke, setAllPoke] = useState([])
    const [limit, setLimit] = useState('40')
    const [offset, setOffset] = useState('0')


    const getAllPokemon = async () => {

        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
            const result = await response.json()
            setAllPoke(result.results)
        }catch(err){console.log(err)}
    


    }
getAllPokemon()

return (
<>
    <h1>Pokemon Max - All Pokemon Site</h1>
    <div>
        <button onClick={()=> setOffset('0')}>1 - 40</button>
        <button onClick={()=> setOffset('40')}>41 - 80</button>
        <button onClick={()=> setOffset('80')}>81 - 120</button>
        <button onClick={()=> setOffset('120')}>121 - 160</button>
        <button onClick={()=> setOffset('160')}>161 - 200</button>
        <button onClick={()=> setOffset('200')}>201 - 240</button>
    </div>
    <div>
        {allPoke.map((poke) => {
            return <button onClick={(e)=> setSinglePokeName(poke.name)} key={poke.name}>{poke.name}</button>
        })}
    </div>
</>

)


}

export default AllPokemon