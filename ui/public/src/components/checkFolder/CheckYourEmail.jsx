import * as React from "react";
import {
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container,
  FormLabel,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LongBtn } from "../buttons/LongBtn";
import Title from "../Title";
import "../../assets/sass/mui-input-btn.scss";

import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
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
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
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
            <Title text={"Check your email"} />
          </Typography>
          <FormLabel
            component="legend"
            sx={{ fontSize: "12px", fontWeight: "24px" }}
          >
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
                <Link to="/login" variant="body2">
                  <LongBtn
                    to="/login"
                    className="outlined-green"
                    text="Back to login"
                  />
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Grid
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              paragraph={true}
              sx={{
                color: "black",
               
                textDecoration: "none",
              }}
            >
              Don't receive the email?
            </Typography>
            <Link
              to="/forget"
              variant="body2"
              style={{textDecoration: 'none'}}
            >
              <Typography
                paragraph={true}
                sx={{
                  color:'green',
                  textDecoration: "none",
                  marginLeft:'5px'
                }}
              >
                Click to resend
              </Typography>
            </Link>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
