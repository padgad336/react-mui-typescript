import React,{useState} from 'react'
import {  Box,Container, Typography,Chip } from '@mui/material'
import { Grass } from '@mui/icons-material'

type PokemonType={
   name:string
   image?:string
   species?:string
   type?:string[]
}
const Pokemon:React.FC<PokemonType>=({name,image,species,type})=>{
   
   const [isHover,setIsHover]=useState<boolean>(false)
   const handleEnter=()=>{
       setIsHover(true)
   }
   const handleLeave=()=>{
       setIsHover(false)
   }
   return(
   <>
   <Box
   onMouseEnter={()=>{setIsHover(true)}}
   onMouseLeave={handleLeave}
   // boolean ? true : false
   sx={{
       bgcolor:'tomato',
       width:'250px',
       height:"300px",
       background:`url("${image}")`,
       transition:'background 0.8s',
       backgroundSize:isHover ? '600px':'300px',
       backgroundPosition:isHover ?'left': 'center',
       borderRadius:'10px',
       position:'relative',
       boxShadow:"0 70px 60px -60px #000"
   }}
   >
       <Box sx={{
           position:"absolute",
           bottom:41
           }}>
           <Typography variant='h5'>
               {name}
           </Typography>
           <Typography variant="body2">
               {species}
           </Typography>
           {/* // Add Type   type?:string[] */}
           {type?.map((t)=>(
           <Chip 
           color="primary"
           label={t}
           size='small' />
           ))}
       </Box>
   </Box>
   </>
   )
}
export default Pokemon