import React from "react";
import IconClose from "../icon/IconClose";
import "./Input.scss";
const Input = ({ className = "" }) => {
  return (
    <div className="input">
      <input type="text" className={`input-search ${className}`} />
      <IconClose />
    </div>
  );
};

export default Input;
