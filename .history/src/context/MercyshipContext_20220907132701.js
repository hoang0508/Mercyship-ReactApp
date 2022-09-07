import { useQuery } from "@apollo/client";
import { printIntrospectionSchema } from "graphql";
import { createContext, useContext, useEffect, useState } from "react";
import { getDataMercy } from "../graphql-client/queries";

// Tạo biến sử dụng context
const MercyShipContext = createContext();

// Hàm Provider context
const MercyShipProvider = ({ children, ...props }) => {
  const { loading, error, data } = useQuery(getDataMercy);
  const [dataAssest, setDataAssets] = useState([]);
  useEffect(() => {
    setDataAssets(data?.posts?.edge);
  }, [data]);
  const value = { dataAssest, setDataAssets };
  return (
    <MercyShipContext.Provider value={value}>
      {children}
    </MercyShipContext.Provider>
  );
};

// hook context
const useMercyShip = () => {
  const context = useContext(MercyShipContext);
  if (typeof context === "undefined")
    throw new Error("useMercyShip must be used within a MercyShipProvider");
  return context;
};

export { MercyShipProvider, useMercyShip };
