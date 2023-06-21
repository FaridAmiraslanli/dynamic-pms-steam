import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Heading = ({ text, fontSize=40 }) => {
  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Typography
        sx={{
          fontSize: `${fontSize}px`,
          fontWeight: 500,
          lineHeight: "48px",
        }}
        variant="h1"
        gutterBottom
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Heading;
