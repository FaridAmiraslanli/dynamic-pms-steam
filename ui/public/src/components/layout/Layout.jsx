import React from 'react'
import {Box} from "@mui/material"
import Logo from '@components/logo/Logo'
import Side from '@components/side/Side'
const Layout = ({children}) => {
  return (
    <Box className="layout">
        <Box className="layout__main">
        <Logo/>
        {children}
        </Box>
       
        <Side/>
    </Box>
  )
}

export default Layout