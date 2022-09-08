import { useQuery } from "@apollo/client";
import React from "react";
import { IconArrowRight } from "../components/icon";
import Layout from "../components/layout/Layout";
import { getCategories } from "../graphql-client/queries";

const CollectionPage = () => {
  const { loading, data } = useQuery(getCategories);

  if (loading) return <div className="circle-loading"></div>;

  const dataCollection = data?.categories?.edges;
  console.log(
    "🚀 ~ file: CollectionPage.js ~ line 16 ~ CollectionPage ~ dataCollection",
    dataCollection
  );

  return (
    <Layout>
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
    </Layout>
  );
};

export default CollectionPage;
