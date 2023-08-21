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
  OutlinedInput,
  // Link,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { styled } from "@mui/material/styles";

import { LongBtn } from "../buttons/LongBtn";
import Or from "../or/Or";
import { IconBtn } from "../buttons/IconBtn";
import Password from "../Password";
import Title from "../Title";
import "../../assets/sass/mui-input-btn.scss";
import { userStore } from "../../store/userStore";
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();

  const setAuthKey = userStore((state) => state.setAuthKey);
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
          localStorage.setItem(
            "authkey",
            JSON.stringify(res.data.accsessToken)
          );
          navigate("/home");
        }
      });
    } catch (err) {
      console.error("error", err);
      toast.error("sehv istifadeci melumatlari");
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
            <Title text={"Welcome back"} />
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(handleLoginApi)}
            sx={{ mt: 8 }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <FormLabel
                  component="legend"
                  sx={{
                    color: "white",
                    fontSize: "14px",
                    fontFamily: "friendsRegular",
                  }}
                >
                  Email
                </FormLabel>
                <OutlinedInput
                  sx={{
                  
                    fontFamily: "friendsThin",
                    fontSize: "16px",
                    backgroundColor: "rgba(248, 250, 239, 1)",
                  }}
                  variant="standard"
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
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Link
                  to="/forget"
                  variant="body2"
                  sx={{ 
                    color: "#8670FF", textDecoration: "none" }}
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
            <Grid container alignItems="center" justifyContent="center">
              <Grid item>
                <Typography
                  variant="span"
                  sx={{ textDecoration: "none", color: "white" }}
                >
                  Already have an account?{" "}
                </Typography>
                <Link
                  to="/register"
                  // variant="body2"
                  sx={{
                    color: "#8670FF",
                    pl: "10px",
                    textDecoration: "none",
                  }}
                >
                  Sign up
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
        draggable
        pauseOnHover
        theme="light"
      />
    </ThemeProvider>
  );
}

// const S = {
//   Input: styled(TextField)`

//       background-color: white
//   `
// }
