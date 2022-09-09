import { useQuery } from "@apollo/client";
import React from "react";
import { v4 } from "uuid";
import { IconArrowRight } from "../../components/icon";
import { useMercyShip } from "../../context/MercyshipContext";
import { getCategories } from "../../graphql-client/queries";
import CollectionItem from "./CollectionItem";
import "./ScreenCollection.scss";
const ScreenCollection = () => {
  const { dataCategory } = useMercyShip();
  const dataCollection = dataCategory?.categories?.edges;
  console.log(
    "🚀 ~ file: ScreenCollection.js ~ line 15 ~ ScreenCollection ~ dataCollection",
    dataCollection
  );
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
