import { useQuery } from "@apollo/client";
import { createContext, useContext } from "react";
import { getDataMercy } from "../graphql-client/queries";

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

export { MercyShipProvider, useMercyShip };
