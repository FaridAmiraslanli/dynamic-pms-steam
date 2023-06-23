import React from "react";
import { Box, Typography } from "@mui/material";

const Title = ({ text }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{
          fontSize: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        variant="h1"
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Title;
