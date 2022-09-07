import { createContext, useContext, useState } from "react";

// Tạo biến sử dụng context
const MercyShipContext = createContext();

// Hàm Provider context
const MercyShipProvider = (props) => {
  const value = {};
  return <MercyShipContext.Provider value={value}></MercyShipContext.Provider>;
};

// hook context
const useMercyShip = () => {
  const context = useContext(MercyShipContext);
  if (typeof context === "undefined")
    throw new Error("useMercyShip must be used within a MercyShipProvider");
  return context;
};

export { MercyShipProvider, useCount };
