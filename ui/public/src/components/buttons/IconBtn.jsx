import React from "react";
import "./buttons.scss";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export function IconBtn({ icon }) {
  return (
    <button className="icon-btn">
      {icon === "facebook" && <FaFacebookF />}
      {icon === "google" && <FcGoogle />}
      {icon === "apple" && <FaApple style={{ color: "black" }} />}
    </button>
  );
}
