import { useQuery } from "@apollo/client";
import React from "react";
import Layout from "../components/layout/Layout";
import { getCategories } from "../graphql-client/queries";
import ScreenCollection from "../modules/screensCollections/ScreenCollection";

const CollectionPage = () => {
  return (
    <Layout>
      <ScreenCollection></ScreenCollection>
    </Layout>
  );
};

export default CollectionPage;
