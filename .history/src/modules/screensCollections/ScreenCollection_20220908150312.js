import { useQuery } from "@apollo/client";
import React from "react";
import { IconArrowRight } from "../../components/icon";
import { getCategories } from "../../graphql-client/queries";

const ScreenCollection = () => {
  const { loading, data } = useQuery(getCategories);

  if (loading) return <div className="circle-loading"></div>;

  const dataCollection = data?.categories?.edges;
  console.log(
    "🚀 ~ file: CollectionPage.js ~ line 16 ~ CollectionPage ~ dataCollection",
    dataCollection
  );
  return (
    <div className="collection-list">
      <div className="collection-list--item">
        <div className="collection-list--content">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h3>Global Mercy</h3>
            <span>12</span>
          </div>
        </div>
        <IconArrowRight></IconArrowRight>
      </div>
    </div>
  );
};

export default ScreenCollection;
