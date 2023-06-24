import * as React from "react";
import {
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container,
  FormLabel,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { LongBtn } from "../buttons/LongBtn";
import Title from "../Title";
import "../../assets/sass/mui-input-btn.scss";
import { Password } from "@mui/icons-material";
const defaultTheme = createTheme();

export default function SetNewPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme} >
      <Container component="main" 
      sx={{width:'603px'}}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 1 }}>
            <Title text={"Set new password?"} />
          </Typography>
          <FormLabel component="legend">
            Your new password must be different to previously used passwords.
          </FormLabel>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3}}
          >
        
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormLabel component="legend">Password</FormLabel>
                <TextField
                  required
                  fullWidth
                  id="password"
                  placeholder="........"
                  name="password"
                  autoComplete="password"
                />
              </Grid>
              <FormLabel component="legend"
              sx={{fontSize:'12px'}}
              >Must be at least 8 characters</FormLabel>
              <Grid item xs={12}>
                <FormLabel component="legend">Confitm password</FormLabel>
                <TextField
                  required
                  fullWidth
                  id="password"
                  placeholder="........"
                  name="password"
                  autoComplete="password"
                />
              </Grid>
              
                {/* <Grid item xs={12}>
                <Password sx={{ mb: 3 }} />
              </Grid> */}
              <Grid item xs={12}>
                <LongBtn className="long-green-1" text="Reset password" />
              </Grid>
              <Grid item xs={12}>
                <LongBtn className="outlined-green" text="Back to login" />
              </Grid>
            </Grid>
           
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
