import * as React from "react";
import {
  Stack,
  FormLabel,
  Container,
  Typography,
  Box,
  Grid,
  Link,
  TextField,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import signUpSchema from "../validations/signUpValidation";

import Password from "../Password";
import Title from "../Title";
import Or from "../or/Or";
import { IconBtn } from "../buttons/IconBtn";
import { LongBtn } from "../buttons/LongBtn";

import "../../assets/sass/mui-input-btn.scss";
import MuiAlert from "../alerts/MuiAlert";

const defaultTheme = createTheme();

export default function SignIn() {
  // const [fetchedData, setFetchedData] = React.useState();
  // React.useEffect(() => {
  //   fetch("http:///localhost:8080/registration", {
  //     method: "post",
  //     headers: { "Content-Type": "application/json" },
  //     body: {
  //       username: "sd",
  //       email: "sd",
  //       password: "ssdad",
  //     },
  //   });
  // }, []);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      let formData = {
        username: event.target[0].value,
        email: event.target[2].value,
        password: event.target[4].value,
      };

      const response = await fetch("http://localhost:8080/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("response", response);

      const data = await response.json();

      console.log("data", data);

      const isValid = await signUpSchema.isValid(formData);
      if (!isValid) {
        event.target[1].textContent = "error";
      }
    } catch (error) {
      console.log("handleSubmit error", error);
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
          <Typography component="h1" variant="h5">
            <Title text={"Create your account"} />
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} variant="rounded">
                <FormLabel component="legend">Full name</FormLabel>
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
                <Password sx={{ mb: 3 }} />
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
                <Link
                  href="#"
                  variant="body2"
                  sx={{ textDecoration: "none", color: "#000" }}
                >
                  Already have an account?
                </Link>
                <Link
                  href="/login"
                  variant="body2"
                  sx={{ color: "#62B273",pl: "10px", textDecoration: "none" }}
                >
                  Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
