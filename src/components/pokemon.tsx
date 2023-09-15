import { useState } from 'react'

import {
    Typography,
    Box
} from "@mui/material"

const Pokemon = () => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const boxStyle = {


    }
    console.log(isHover);

    return (
        <>
            <Box
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                sx={{
                    transition: 'background 0.8s',
                    color: 'white',
                    width: '300px',
                    height: '300px',
                    background: 'url("https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png")',
                    backgroundSize: isHover ? '600px' : '300px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: isHover ? 'left' : 'center',
                    borderRadius: '10px'

                }}
            >
                <Typography gutterBottom variant="h5" color={'white'} component="div">
                    Bulbasaur
                </Typography>
            </Box>
        </>
    )
}
export default Pokemon