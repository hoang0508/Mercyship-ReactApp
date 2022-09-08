import { useQuery } from "@apollo/client";
import React from "react";
import { v4 } from "uuid";
import { IconArrowRight } from "../../components/icon";
import { getCategories } from "../../graphql-client/queries";
import CollectionItem from "./CollectionItem";
import "./ScreenCollection.scss";
const ScreenCollection = () => {
  const { loading, data } = useQuery(getCategories);

  if (loading) return <div className="circle-loading"></div>;
  if (!data) return null;

  const dataCollection = data?.categories?.edges;
  console.log(
    "🚀 ~ file: CollectionPage.js ~ line 16 ~ CollectionPage ~ dataCollection",
    dataCollection
  );
  return (
    <div className="collection-list">
      {dataCollection &&
        dataCollection.length > 0 &&
        dataCollection.map((item) => (
          <CollectionItem key={v4()} data={item}></CollectionItem>
        ))}
    </div>
  );
};

export default ScreenCollection;
