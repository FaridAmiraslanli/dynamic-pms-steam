import * as React from "react";
import {
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container,
  FormLabel,
  TextField,
  Stack,
  Link,
  FormHelperText,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { LongBtn } from "../buttons/LongBtn";
import Or from "../or/Or";
import { IconBtn } from "../buttons/IconBtn";
import Password from "../Password";
import Title from "../Title";
import "../../assets/sass/mui-input-btn.scss";
import { userStore } from "../../store/userStore";
import { useEffect } from "react";
import MuiAlert from "../alerts/MuiAlert";

const defaultTheme = createTheme();

export default function  SignUp() {
  const {authKey, setAuthKey} = userStore();
  const [alert,setAlert] = React.useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = {
      email: event.target[0].value,
      password: event.target[2].value,
    };
    // console.log(formData)
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    console.log("response", response);

    const data = await response.json();
    setAuthKey(data[0]?.accsessToken)
    console.log("authkey", authKey)
  };

  React.useEffect(() => {
      console.log("autkeyimiz", authKey)
      if (authKey){
        console.log("authkey var")
      } else {
        console.log("yoxdu");
      }
  }, [authKey])

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
          <Typography component="h1" variant="h5">
            <Title text={"Welcome"} />
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
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
                <Password
                  sx={{ mb: 2 }}
                  helperText="Forgot password"
                  variant="standard"
                />
              </Grid>
              <Grid
                sx={{
                  mt: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <Link
                  href="/forget"
                  variant="body2"
                  sx={{ color: "#62B273",textDecoration:"none" }}
                >
                  Forgot password
                </Link>
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
                <Link href="#" variant="body2" sx={{textDecoration:"none", color:"#000"}}>
                  Already have an account?
                </Link>
                <Link
                  href="/register"
                  variant="body2"
                  sx={{ color: "#62B273", pl: "10px", textDecoration:"none"}}
                >
                  Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      {alert && <MuiAlert />}
    </ThemeProvider>
  );
}
