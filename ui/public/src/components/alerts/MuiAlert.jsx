import { Alert, AlertTitle } from "@mui/material";
import React from "react";

function MuiAlert({ severity, message, title = "Alert" }) {
  const [showAlert, setShowAlert] = React.useState(true);

  return (
    showAlert && (
      <Alert variant="filled" severity={severity} onClose={() => setShowAlert(false)}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    )
  );
}

export default MuiAlert;
