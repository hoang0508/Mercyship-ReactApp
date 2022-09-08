import React from "react";
import IconClose from "../icon/IconClose";
import "./Input.scss";
const Input = ({ className = "" }) => {
  return (
    <div className="input">
      <input type="text" className={`input-search ${className}`} />
      <div className="input-search--close">
        <IconClose />
      </div>
    </div>
  );
};

export default Input;
