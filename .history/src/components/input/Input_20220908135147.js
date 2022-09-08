import React from "react";
import { useMercyShip } from "../../context/MercyshipContext";
import IconClose from "../icon/IconClose";
import "./Input.scss";
const Input = ({ className = "" }) => {
  const { handleToggle } = useMercyShip();
  return (
    <div className="input">
      <input type="text" className={`input-search ${className}`} />
      <div className="input-search--close" onClick={handleToggle}>
        <IconClose />
      </div>
    </div>
  );
};

export default Input;
