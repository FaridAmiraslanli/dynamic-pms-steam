import * as React from "react";
import {
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container,
  FormLabel,
  Link,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { LongBtn } from "../buttons/LongBtn";
import Title from "../Title";
//import "../../assets/sass/mui-input-btn";

const defaultTheme = createTheme();

export default function CheckYourEmail() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}
    
    >
      <Container component="main" maxWidth="xs"
     
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width:'100%'
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 1 }}>
            <Title text={"Check your email"} />
          </Typography>
          <FormLabel component="legend">
            We sent a password reset link to albinaqarayeva@gmail.com
          </FormLabel>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <LongBtn className="outlined-green" text="Back to login" />
              </Grid>
            </Grid>
          </Box>
          <Grid
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Link
            disabled
             variant="disabled"
              href="/forget"
              sx={{color: "black", textDecoration: "none" }}
            >
              Don't receive the email?
            </Link>
            <Link
              href="/forget"
              variant="body2"
              sx={{ color: "green", textDecoration: "none" }}
            >
              Click to resend
            </Link>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
