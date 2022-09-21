import { useQuery } from "@apollo/client";
import { createContext, useContext, useEffect, useState } from "react";
import { getCategories, getDataMercy } from "../graphql-client/queries";

// Tạo biến sử dụng context
const MercyShipContext = createContext();

// Hàm Provider context
const MercyShipProvider = ({ children, ...props }) => {
  // state data query
  const { loading, data } = useQuery(getDataMercy);
  const [dataAssest, setDataAssets] = useState([]);
  useEffect(() => {
    setDataAssets(data?.posts?.edges);
  }, [data]);

  // state data query category
  const { data: dataCategory } = useQuery(getCategories);

  // toggle true/false
  const [valueToggle, setValueToggle] = useState(false);
  const handleToggle = () => {
    setValueToggle(!valueToggle);
  };

  // isInput
  const [isSearchView, setIsSearchView] = useState(true);

  // ViewList
  const [viewList, setViewList] = useState(false);
  const handleViewList = () => {
    setViewList(!viewList);
  };

  // dataItemCateGory
  const [dataItemCategory, setDataItemCategory] = useState([]);

  // search input text
  const [inputTextSearch, setInputTextSearch] = useState("");

  // localFavorite
  const { storedValue, setValue } = useLocalStorage("favoriteValue", []);

  const value = {
    dataAssest,
    setDataAssets,
    valueToggle,
    handleToggle,
    isSearchView,
    setIsSearchView,
    dataCategory,
    viewList,
    handleViewList,
    setDataItemCategory,
    dataItemCategory,
    loading,
    inputTextSearch,
    setInputTextSearch,
    storedValue, 
    setValue
    
  };
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
