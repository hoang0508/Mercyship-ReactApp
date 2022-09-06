import { useQuery } from "@apollo/client";
import React from "react";
import Layout from "../components/layout/Layout";
import { getDataMercy } from "../graphql-client/queries";

const HomePage = () => {
  const { loading, error, data } = useQuery(getDataMercy);
  console.log("🚀 ~ file: HomePage.js ~ line 8 ~ HomePage ~ data", data);
  return <Layout>Home page</Layout>;
};

export default HomePage;
