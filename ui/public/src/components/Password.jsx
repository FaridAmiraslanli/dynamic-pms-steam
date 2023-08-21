import * as React from "react";
import {
  Box,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  Typography,
  FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function InputAdornments({ register, errors }) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box>
      <InputLabel
        sx={{
          width: "100%",
          color: "white",
          fontSize: "14px",
          fontFamily: "friendsRegular",
        }}
        htmlFor="outlined-adornment-password"
      >
        Password
      </InputLabel>
      <OutlinedInput
        sx={{
          width: "100%",
          backgroundColor: "rgba(248, 250, 239, 1)",
          borderRadius: "8px",
          fontFamily: "friendsThin",
          fontSize: "16px",
        }}
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        error={Boolean(errors.password)}
        {...register("password", {
          minLength: 6,
          required: true,
          validate: (val) => /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d$%^]*$/.test(val),
        })}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        placeholder="Enter your password"
      />
      {Boolean(errors.password) && (
        <FormHelperText error id="username-error" sx={{ ml: "14px" }}>
          <PasswordError />
        </FormHelperText>
      )}
    </Box>
  );
}

function PasswordError() {
  return (
    <Typography>
      It must contain at least 6 characters, at least 1 letter, and 1 number.
    </Typography>
  );
}
