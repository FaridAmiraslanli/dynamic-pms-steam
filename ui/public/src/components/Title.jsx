import React from "react";
import { Box, Typography } from "@mui/material";
import "../assets/Fonts/fonts.css";


const Title = ({ text }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{
          fontSize: "32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "friendsUltraBold",
          mt: 4
        }}
        variant="h1"
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Title;
