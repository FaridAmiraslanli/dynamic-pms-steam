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
import { handleLoginApi } from "../../services/api.service";
import axios from "axios";

const defaultTheme = createTheme();

export default function SignUp() {
  const { authKey, setAuthKey } = userStore();
  const [alert, setAlert] = React.useState({
    show: false,
    severity: "",
    message: "",
    title: "",
  });

  // React.useEffect(() => {
  //   console.log("autkeyimiz", authKey);
  //   if (authKey) {
  //     console.log("authkey var");
  //   } else {
  //     console.log("yoxdu");
  //   }
  // }, [authKey]);

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
            onSubmit={(event) => handleLoginApi(event, setAuthKey, setAlert)}
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
                  sx={{ color: "#62B273", textDecoration: "none" }}
                >
                  Forgot password
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="/welcome">
                  <LongBtn className="long-gray" text="Continue" />
                </Link>
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
                  href="/register"
                  variant="body2"
                  sx={{ color: "#62B273", pl: "10px", textDecoration: "none" }}
                >
                  Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      {alert.show && (
        <MuiAlert
          severity={alert.severity}
          message={alert.message}
          title={alert.title}
        />
      )}
    </ThemeProvider>
  );
}
