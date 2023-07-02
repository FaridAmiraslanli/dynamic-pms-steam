import React from "react";

import "./buttons.scss";

export function LongBtn({ className, text, disabled=false }) {
  return <button disabled={disabled} className="long-green-1" >{text}</button>;
}
