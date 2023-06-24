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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LongBtn } from "../buttons/LongBtn";
import Title from "../Title";
import "../../assets/sass/mui-input-btn.scss";
import { Password } from "@mui/icons-material";
const defaultTheme = createTheme();

export default function PasswordReset() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme} >
      <Container component="main" 
    //   sx={{width:'603px'}}
      >
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
            <Title text={"Password reset"} />
          </Typography>
          <FormLabel component="legend">
            Your password has been successfully reset.
          </FormLabel>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3,minWidth:"600px"}}
            
          >
              <Grid item xs={20}  sx={{ width: '100%', padding: 1, margin: 2 }}>
                <LongBtn  className="long-green-1" text="Back to login"/>
              </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
