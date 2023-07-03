import React from 'react'
import {Box} from "@mui/material"
import Logo from '@components/logo/Logo'
import Side from '@components/side/Side'
import { motion } from 'framer-motion'
const Layout = ({children}) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%" }}
    >
      <Box className="layout">
        <Box className="layout__main">
          <Logo />
          {children}
        </Box>

        <Side />
      </Box>
    </motion.div>
  );
}

export default Layout