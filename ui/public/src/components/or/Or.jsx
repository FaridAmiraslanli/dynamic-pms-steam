import React from "react";
import { Box, Typography } from "@mui/material";

function Or() {
  const inlineStyle = {
    width: "39%",
    height: "1px",
    backgroundColor:"rgba(255, 255, 255, 0.2)"
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <Typography sx={inlineStyle}></Typography>
      <Typography sx={{color: "rgba(255, 255, 255, 0.6)"}}>OR</Typography>
      <Typography sx={inlineStyle}></Typography>
    </Box>
  );
}

export default Or;
