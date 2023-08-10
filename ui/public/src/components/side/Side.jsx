import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import "../../assets/sass/layout.scss";
import img2 from "../../assets/images/data-analyse.png"
const Side = () => {
  return (
    <Grid className="side" 
    item
    md={5}
    sx={{ height: '100vh' }}
    // sx={{ display: "inline-block"}}
    >

      <img src={img2} alt="" />
    </Grid>
  )
}

export default Side