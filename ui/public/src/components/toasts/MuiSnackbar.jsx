import React from "react";
import { Snackbar, Button } from "@mui/material";

export const MuiSnackbar = ({ message }) => {
  const [open, setOpen] = React.useState(true)
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false)
  };
  return (
    <>
      <Snackbar message={message} autoHideDuration={4000} open={open} onClose={handleClose} />
    </>
  );
};
