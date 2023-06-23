import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormLabel from "@mui/material/FormLabel";
import './siginin.css'
import { LongBtn } from "../buttons/LongBtn";
// import { LongBtn } from "../buttons/LongBtn";
// import Login from "../../pages/Login";
import Or from "../or/Or";
import { Stack } from "@mui/material";
import { IconBtn } from "../buttons/IconBtn";
import Password from "../Password";
import Title from "../title";
import signUpSchema from "../validations/signUpValidation";
// import * as yup from "yup"

const defaultTheme = createTheme();

export default function SignIn() {
  const  handleSubmit = async (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    let formData = {
      name: event.target[0].value,
      email: event.target[2].value,
      password: event.target[4].value
    }
    const isValid = await signUpSchema.isValid(formData)
    console.log(formData)
    console.log(isValid)
    if (!isValid){
      event.target[1].textContent = "error"
    }
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
              <Title text={"Create your account"}/>
          </Typography>
          <Box
           
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3}}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} variant="rounded">
                <FormLabel  component="legend">Full name</FormLabel>
                <TextField 
                  autoComplete="given-name"
                  name="fullName"
                  fullWidth
                  id="fullName"
                  placeholder="Full Name"
                  autoFocus
              
                />
              </Grid>

              <Grid item xs={12}>
                <FormLabel component="legend">Email</FormLabel>
                <TextField 
                  required
                  fullWidth
                  id="email"
                  placeholder="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <Password  sx={{ mb: 3 }}/>
               
              </Grid>
              <Grid item xs={12}>
              <LongBtn className="long-gray" text="Continue" />
               
              </Grid>
             
            </Grid>

            <Or item sx={{ mt: 3 }} />

            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <IconBtn icon="facebook" />
              <IconBtn icon="google" />
              <IconBtn icon="apple" />
            </Stack>
            <Grid container alignItems="center" justifyContent="center">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? 
                </Link>
                <Link href="#" variant="body2" 
                style={{color:'#62B273'}}
                >
                   Sign in
                </Link>
              </Grid>
            </Grid>
          
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
