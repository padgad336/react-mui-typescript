import {
    Box,
    Chip,
    Container,
    Grid,
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
console.log(pokemon)
return(
    <>
    <Container maxWidth="lg">
    <Typography variant='h3'>
        Pokemon Details
    </Typography>
    <Grid container sx={{width:'100%',height:"100vh"}}>
        <Grid item sm={4} md={4} xs={12} sx={{}}>
            <Box component={'img'}
            sx={{width:'300px', height:'300px'}}
            src={`${pokemon?.image?.hires}`}
            alt="pokemon-image"
            />
            
            </Grid>
        <Grid item sm={8} md={8} xs={12} sx={{}}>
            <Typography variant='h4'>
                name:{pokemon?.name?.english}
            </Typography>
            <Typography variant='h4'>
            {pokemon?.name?.japanese}
            </Typography>
            {pokemon?.type?.map((t:string)=>(
            <Chip 
            color="primary"
            label={t}
            size='small' />
            ))}
            </Grid>
    </Grid>
    </Container>
    </>
)
}
export default PokemonById