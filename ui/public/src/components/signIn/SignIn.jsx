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

import Password from "../Password";
import Title from "../Title";
import Or from "../or/Or";
import { IconBtn } from "../buttons/IconBtn";
import { LongBtn } from "../buttons/LongBtn";

import "./signin.scss";

const defaultTheme = createTheme();

export default function SignIn() {
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
                <Link href="#" variant="body2">
                  Already have an account?
                </Link>
                <Link
                  href="#"
                  variant="body2"
                  sx={{ color: "#62B273", pl: "10px" }}
                >
                  Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
