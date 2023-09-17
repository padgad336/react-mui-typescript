import {  Box,Container, Typography } from '@mui/material'
import React from 'react'

// import Pokemon from '../components/pokemon'
import pokemonData from '../assets/pokedex.json'
import Pokemon from '../components/pokemon'

type PokemonProps={
    id: number,
    name: {
        english: string,
        japanese: string,
        chinese: string,
        french: string
    },
    type: string[],
    base: {
        HP: number,
        Attack: number,
        Defense: number,
        "Sp. Attack": number,
        "Sp. Defense": number,
        Speed: number
    },
    species: string,
    description: string,
    evolution?: {
        next: any[]
    },
    profile: {
        height: string
        weight: string,
        egg: string[],
        ability: any[],
        gender: string
    },
    image: {
        sprite: string
        thumbnail: string,
        hires: string
    }
}

const ListPokemon = () => {
    const beelzebub:PokemonProps = {
        id: 1,
        name: {
            english: "Bulbasaur",
            japanese: "フシギダネ",
            chinese: "妙蛙种子",
            french: "Bulbizarre"
        },
        type: [
            "Grass",
            "Poison"
        ],
        base: {
            HP: 45,
            Attack: 49,
            Defense: 49,
            "Sp. Attack": 65,
            "Sp. Defense": 65,
            Speed: 45
        },
        species: "Seed Pokémon",
        description: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.",
        evolution: {
            next: [
                [
                    "2",
                    "Level 16"
                ]
            ]
        },
        profile: {
            height: "0.7 m",
            weight: "6.9 kg",
            egg: [
                "Monster",
                "Grass"
            ],
            ability: [
                [
                    "Overgrow",
                    "false"
                ],
                [
                    "Chlorophyll",
                    "true"
                ]
            ],
            gender: "87.5:12.5"
        },
        image: {
            sprite: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/001.png",
            thumbnail: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/001.png",
            hires: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png"
        }
    }

    const pokemonList =pokemonData
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Box sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:"center",
                    flexWrap:'wrap'
                    }}>
                    {pokemonList?.map((row)=>{
                        return(
                            <Pokemon 
                            name={row.name.english} 
                            image={row.image.hires} 
                            species={row.species}
                            type={row.type}
                            id={row.id}
                            />
                        )
                    })}
                {/* <Pokemon 
                name={beelzebub.name.english} 
                image={beelzebub.image.hires} 
                species={beelzebub.species}
                type={beelzebub.type}
                /> */}
                </Box>
            </Container>
        </React.Fragment>
    )
}
export default ListPokemon