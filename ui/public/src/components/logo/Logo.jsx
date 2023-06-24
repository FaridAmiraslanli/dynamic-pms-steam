import React from "react";
import { Box, Typography } from "@mui/material";
import "../../assets/sass/layout.scss";


const Logo = () => {
  return (
    <Box className="logo">
    <Typography
      className="logo__description"
      variant="h1"
      component="h2"
    >
      Logo
    </Typography>
    </Box>
  );
};

export default Logo;
