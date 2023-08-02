import React from 'react'
import { Box, Typography } from '@mui/material'
import "../../assets/sass/layout.scss";
import img2 from "../../assets/images/data-analyse.png"
const Side = () => {
  return (
    <Box className="side">
    {/* <Typography
      className="side__description"
      variant="h1"
      component="h2"
    >
      ONBOARD
    </Typography> */}
      <img src={img2} alt="" />
    </Box>
  )
}

export default Side