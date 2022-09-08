import React from "react";
import "./Input.scss";
const Input = ({ className = "" }) => {
  return (
    <div className="input">
      <input type="text" className={`input-search ${className}`} />
    </div>
  );
};

export default Input;
