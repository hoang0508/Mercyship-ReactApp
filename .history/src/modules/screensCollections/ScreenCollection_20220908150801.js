import { useQuery } from "@apollo/client";
import React from "react";
import { IconArrowRight } from "../../components/icon";
import { getCategories } from "../../graphql-client/queries";
import "./ScreenCollection.scss";
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
          <div className="collecton-list--image">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
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
