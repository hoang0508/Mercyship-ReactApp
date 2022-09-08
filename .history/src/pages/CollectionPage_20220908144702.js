import { useQuery } from "@apollo/client";
import React from "react";
import Layout from "../components/layout/Layout";
import { getCategories } from "../graphql-client/queries";

const CollectionPage = () => {
  const { loading, data } = useQuery(getCategories);

  if (loading) return <div class="circle-loading"></div>;

  return <Layout>CollectionPage</Layout>;
};

export default CollectionPage;
