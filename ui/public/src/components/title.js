import React from 'react';
import Box from "@mui/material/Box";
import { Typography } from '@mui/material';

const Title = ({text}) => {
  return (
    <>
    <Box sx = {{width: "100%"}}>
        <Typography style={{fontSize:"40px", display:"flex", justifyContent:"center", alignItems:"center"}} variant="h1">
           {text}
        </Typography>
        
        
        </Box> 
    
    
    </>
  )
}

export default Title;