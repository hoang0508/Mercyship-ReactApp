import { useState } from "react";

export default function useActive() {
  const [isActive, setIsActive] = useState(false);
  const [prevIndex, setPrevIndex] = useState(0);
  const handleActive = (index) => {
    // console.log(isActive);
    if (index !== prevIndex) {
      setPrevIndex(index);
      setIsActive(true);
    } else {
      setIsActive(!isActive);
    }
  };
  return {
    isActive,
    handleActive,
    prevIndex,
  };
}
