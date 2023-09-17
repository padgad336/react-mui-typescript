import {
    Typography
} from '@mui/material'
import { useParams } from 'react-router-dom'
import {useState} from 'react'
const PokemonById =()=>{
const params =useParams()
const [pokemon,setPokemon]=useState()
// APP .tsx <Route Component={PokemonById} path="/pokemon/:pokemonId" />
return(
    <>
    <Typography variant='h3'>
        Pokemon Details
    </Typography>
    </>
)
}
export default PokemonById