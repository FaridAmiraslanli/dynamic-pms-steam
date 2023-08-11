import * as React from "react";
import {
  Stack,
  FormLabel,
  Container,
  Typography,
  Box,
  Grid,
  // Link,
  TextField,
  CssBaseline,
  ThemeProvider,
  createTheme,
  OutlinedInput,
} from "@mui/material";

import { Link } from "react-router-dom";
import Password from "../Password";
import Title from "../Title";
import Or from "../or/Or";
import { IconBtn } from "../buttons/IconBtn";
import { LongBtn } from "../buttons/LongBtn";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../assets/sass/mui-input-btn.scss";

import { useForm } from "react-hook-form";

const defaultTheme = createTheme();

export default function SignUp() {
  const formRef = React.useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterApi = async (formData) => {
    const url = "http://localhost:8080/auth/registration";

    console.log(formData);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("response", response);

      const data = await response.json();
      console.log("data", data);

      if (data.message) {
        toast.warn(data.message);
      } else {
        toast.info(data);
      }
    } catch (error) {
      console.log("handleSubmit error", error);
      toast.error("error");
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
          <Typography component="h1" variant="h5" color="white">
            <Title text={"Create your account"} />
          </Typography>
          <Box
            component="form"
            ref={formRef}
            noValidate
            // onChange={(event) => handleValidation(event)}
            onSubmit={handleSubmit(handleRegisterApi)}
            // onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} variant="rounded">
                <FormLabel component="legend" sx={{ color: "white" }}>
                  Full name
                </FormLabel>
                <OutlinedInput
                  id="outlined-basic"
                  sx={{
                    backgroundColor: "rgba(248, 250, 239, 1)",
                    overflow: "hidden",
                  }}
                  autoComplete="given-name"
                  name="fullName"
                  fullWidth
                  placeholder="Enter your name"
                  autoFocus={false}
                  error={Boolean(errors.username)}
                  helperText={
                    Boolean(errors.username) && (
                      <Typography>invalid username</Typography>
                    )
                  }
                  {...register("username", {
                    validate: (val) => /^.{5,}$/.test(val),
                  })}
                />
              </Grid>

              <Grid item xs={12}>
                <FormLabel component="legend" sx={{ color: "white" }}>
                  Email
                </FormLabel>
                <OutlinedInput
                  sx={{
                    backgroundColor: "rgba(248, 250, 239, 1)",
                    overflow: "hidden",
                  }}
                  required
                  fullWidth
                  id="email"
                  placeholder="Enter your email"
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
                <Password sx={{ mb: 3 }} register={register} errors={errors} />
              </Grid>
              <Grid item xs={12}>
                <LongBtn text="Continue" />
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
                <Typography
                  variant="span"
                  // variant="body2"
                  sx={{ textDecoration: "none", color: "white" }}
                >
                  Already have an account?{" "}
                </Typography>
                <Link
                  to="/login"
                  // variant="body2"
                  sx={{
                    color: "#8670FF",
                    pl: "10px",
                    textDecoration: "none",
                  }}
                >
                  Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggabl
        e
        pauseOnHover
        theme="light"
      />
    </ThemeProvider>
  );
}

