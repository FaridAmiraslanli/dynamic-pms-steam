import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import "../../assets/sass/layout.scss";
import img2 from "../../assets/images/data-analyse.png"
const Side = () => {
  return (
    <Grid className="side" 
    item
    md={5}
    border="1px solid yellow"
    // flexGrow={6}
    sx={{ height: '100vh' }}
    // sx={{ display: "inline-block"}}
    >
    {/* <Typography
      className="side__description"
      variant="h1"
      component="h2"
    >
      ONBOARD
    </Typography> */}
      <img src={img2} alt="" />
    </Grid>
  )
}

export default Side