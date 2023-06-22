import React from 'react'
import "./Button.scss"
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export function Button({text}) {
  return (
    <button className='btn'>{text}</button>
  )
}

export function IconBtn({icon}) {
  return (
    <button className="icon-btn">
      {icon == "facebook" && <FaFacebookF />}
      {icon == "google" && <FcGoogle />}
      {icon == "apple" && <FaApple style={{ color: "black" }} />}
    </button>
  );
}

export function LinkBtn({text}) {
  return <button className='link-btn'>{text}</button>;
}
