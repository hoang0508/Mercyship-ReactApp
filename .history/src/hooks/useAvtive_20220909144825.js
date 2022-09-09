import { useState } from "react";

export default function useActive() {
  const [isActive, setIsActive] = useState(false);
  const [prevIndex, setPrevIndex] = useState(5);
  const handleActive = (index) => {
    if (index !== prevIndex) {
      setPrevIndex(index);
      // setIsActive(!isActive);
    }
  };
  return {
    isActive,
    handleActive,
  };
}
