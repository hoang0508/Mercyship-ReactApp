import { useState } from "react";

export default function useActive() {
  const [isActive, setIsActive] = useState(false);
  const [prevIndex, setPrevIndex] = useState(5);
  const handleActive = (index) => {
    console.log(index, prevIndex);
    console.log(isActive);
    if (index !== prevIndex) {
      console.log("change");
      setPrevIndex(index);
      setIsActive(true);
    } else setIsActive(!isActive);
  };
  return {
    isActive,
    handleActive,
  };
}
