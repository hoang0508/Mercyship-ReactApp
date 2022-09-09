import { useState } from "react";

export default function useActive() {
  const [isActive, setIsActive] = useState(false);
  const handleActive = (index) => {
    setIsActive(!isActive);
  };
  return {
    isActive,
    handleActive,
  };
}
