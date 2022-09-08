import { useState } from "react";

export default function useToggle() {
  const [valueToggle, setValueToggle] = useState(false);
  const handleToggle = () => {
    setValueToggle(!valueToggle);
  };
  return {
    valueToggle,
    handleToggle,
  };
}
