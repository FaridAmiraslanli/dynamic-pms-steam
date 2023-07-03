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
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LongBtn } from "../buttons/LongBtn";
import Title from "../Title";
import "../../assets/sass/mui-input-btn.scss";
import { useForm, SubmitHandler } from "react-hook-form";



const defaultTheme = createTheme();

export default function ForgetPassword() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };
  const handleForget = async (formData) => {
    const url = "http://localhost:8080/user/forgot-password";

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
    } catch (error) {
      console.log("handleSubmit error", error);
    }
  }

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
            <Title text={"Forgot password?"} />
          </Typography>
          <FormLabel component="legend">
            No worries, we'll send you reset instructions.
          </FormLabel>
          <Box
            component="form"
            noValidate
            // onSubmit={handleSubmit}
            onSubmit={handleSubmit(handleForget)}
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
                  helperText={
                    Boolean(errors.email) && (
                      <Typography>invalid email</Typography>
                    )
                  }
                  error={Boolean(errors.email)}

                  {...register("email", {
                    validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <Link to={"/check"} variant="body2"> */}
                <LongBtn
                  className="long-green-1"
                  text="Reset password"
                />
                {/* </Link> */}
              </Grid>
              <Grid item xs={12}>
                <Link
                  to={"/login"}
                  variant="body2"
                  sx={{ textDecoration: "none" }}
                >
                  <LongBtn className="outlined-green" text="Back to login" />
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
