import React from 'react'
import CreateNewAccount from '../components/createYourAccount/CreateNewAccount'
import { Box, Typography } from '@mui/material'
const ErrorPage = () => {
  return (
    <Box sx={{display: 'flex', justifyContent:"center", alignItems: "center", minHeight: "100vh"}}>
      <Typography component="h1" color="white" fontSize="50px">
        404 not found
      </Typography>
    </Box>
  )
}

export default ErrorPage
