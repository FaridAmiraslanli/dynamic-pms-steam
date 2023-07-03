import * as React from "react";
import {
  Box,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  Typography,
  TextField,
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
      <InputLabel sx={{ width: "100%" }} htmlFor="outlined-adornment-password">
        Password
      </InputLabel>
      <OutlinedInput
        sx={{ width: "100%" }}
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        error={Boolean(errors.password)}
        {...register("password", {
          minLength: 6,
          required: true,
          validate: (val) =>
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/.test(val),
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
        placeholder="Password"
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
      azi 6 xarakterden ibaret, azi 1 herf, 1 reqem olmalidi
    </Typography>
  );
}
