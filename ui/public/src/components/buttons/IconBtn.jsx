import React from "react";
import { Button } from "@mui/material";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import "./buttons.scss";

export function IconBtn({ icon }) {
  return (
    <Button className="icon-btn">
      {icon === "facebook" && <FaFacebookF />}
      {icon === "google" && <FcGoogle />}
      {icon === "apple" && <FaApple sx={{ color: "black" }} />}
    </Button>
  );
}
