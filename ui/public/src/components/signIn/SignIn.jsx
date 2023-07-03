import * as React from "react";
import Axios from "axios";
import {
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container,
  FormLabel,
  TextField,
  Stack,
  // Link,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

import { LongBtn } from "../buttons/LongBtn";
import Or from "../or/Or";
import { IconBtn } from "../buttons/IconBtn";
import Password from "../Password";
import Title from "../Title";
import "../../assets/sass/mui-input-btn.scss";
import { userStore } from "../../store/userStore";
import MuiAlert from "../alerts/MuiAlert";
import { MuiSnackbar } from "../toasts/MuiSnackbar";
import { useForm } from "react-hook-form";

const defaultTheme = createTheme();

export default function SignIn() {
  const {  setAuthKey } = userStore();
  const [alert, setAlert] = React.useState({
    show: false,
    severity: "",
    message: "",
    title: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginApi = async (formData) => {
    const url = "http://localhost:8080/auth/login";
    try {
      await Axios.post(url, formData, {
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        setAuthKey(res?.data.accsessToken);
        if (res.data.accsessToken) {
          setAlert({
            show: true,
            severity: "success",
            message: "istifadeci movcuddur",
            title: "duzgun giris",
          });
          localStorage.setItem(
            "authkey",
            JSON.stringify(res.data.accsessToken)
          );
        }
      });
    } catch (err) {
      console.error("error", err);
      setAlert({
        show: true,
        severity: "warning",
        message: err.message,
        title: "email ve ya parol sehvdir",
      });
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
            <Title text={"Welcome"} />
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(handleLoginApi)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2} sx={{marginTop:'10px'}}>
              <Grid item xs={12}>
                <FormLabel component="legend">Email</FormLabel>
                <TextField
                  required
                  fullWidth
                  id="email"
                  placeholder="Email Address"
                  name="email"
                  autoComplete="email"
                  type={"email"}
                  {...register("email", {
                    validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
                  })}
                  error={Boolean(errors.email)}
                  helperText={
                    Boolean(errors.email) && (
                      <Typography>invalid email</Typography>
                    )
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Password
                  sx={{ mb: 2 }}
                  // helperText="helper text" --- doesnt work
                  variant="standard"
                  register={register}
                  errors={errors}
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
                {/* <Link to="/"> */}
                <LongBtn
                  className="long-gray"
                  text="Continue"
                  // disabled={Boolean(errors.email)}
                />
                {/* </Link> */}
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
            <Grid container alignItems="center" justifyContent="center" style={{
                    color: "#62B273",
                    pl: "10px",
                    textDecoration: "none",
                  }}
           >
              <Grid item sx={{marginTop:'20px'}}  >
                <Link
                  to="#"
                 
                >
                  Already have an account?
                </Link>
                <Link
                  to="/register"
                 
                >
                  Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      {alert.show && (
        // <MuiAlert
        //   severity={alert.severity}
        //   message={alert.message}
        //   title={alert.title}
        // />
        <MuiSnackbar message={alert.message} />
      )}
    </ThemeProvider>
  );
}
