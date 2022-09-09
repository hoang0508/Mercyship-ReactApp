import { useState } from "react";

export default function useActive() {
  const [isActive, setIsActive] = useState(false);
  const [prevIndex, setPrevIndex] = useState();
  const handleActive = (index) => {
    console.log(index, prevIndex);
    // console.log(isActive);
    if (index !== prevIndex) {
      console.log("change");
      setPrevIndex(index);
      setIsActive(true);
    } else {
      setIsActive(!isActive);
      console.log("change2");
    }
  };
  return {
    isActive,
    handleActive,
  };
}
