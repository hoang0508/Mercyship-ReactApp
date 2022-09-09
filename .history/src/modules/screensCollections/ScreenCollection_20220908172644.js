import React from "react";
import { v4 } from "uuid";
import { useMercyShip } from "../../context/MercyshipContext";
import CollectionItem from "./CollectionItem";
import "./ScreenCollection.scss";
const ScreenCollection = () => {
  const { dataCategory } = useMercyShip();
  const dataCollection = dataCategory?.categories?.edges;
  return (
    <div className="collection-list">
      {dataCollection &&
        dataCollection.length > 0 &&
        dataCollection.map((item) => (
          <CollectionItem key={v4()} data={item?.node}></CollectionItem>
        ))}
    </div>
  );
};

export default ScreenCollection;
