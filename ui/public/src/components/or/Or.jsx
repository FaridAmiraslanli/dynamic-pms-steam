import React from "react";
import { Box, Typography } from "@mui/material";

function Or() {
  const inlineStyle = {
    width: "39%",
    height: "1px",
    backgroundColor: "#ebebeb",
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
      <Typography>or</Typography>
      <Typography sx={inlineStyle}></Typography>
    </Box>
  );
}

export default Or;
