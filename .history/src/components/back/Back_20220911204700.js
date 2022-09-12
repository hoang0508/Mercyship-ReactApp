import React from "react";
import { useNavigate } from "react-router-dom";
import { IconArrowLeft } from "../icon";

const Back = () => {
  const navigate = useNavigate();

  return (
    <div className="back" onClick={() => navigate(`/collections`)}>
      <span>
        <IconArrowLeft />
      </span>
    </div>
  );
};

export default Back;
