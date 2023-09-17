import {
    Typography
} from '@mui/material'
import { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import pokemomData from './../assets/pokedex.json'

const PokemonById =()=>{
const params =useParams()
const [pokemon,setPokemon]=useState<any|null>(null)
const pokemonList =pokemomData
useEffect(()=>{
if(!pokemon){
    let poke =pokemonList.filter((row)=>`${row?.id}`===`${params?.pokemonId}`)
    if(poke.length !==0){

        setPokemon(poke[0])
    }
}
},[])
return(
    <>
    <Typography variant='h3'>
        Pokemon Details
    </Typography>
    </>
)
}
export default PokemonById