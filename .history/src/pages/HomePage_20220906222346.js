import { useQuery } from "@apollo/client";
import React from "react";
import Layout from "../components/layout/Layout";
import { getDataMercy } from "../graphql-client/queries";

const HomePage = () => {
  const { loading, error, data } = useQuery(getDataMercy);
  console.log("🚀 ~ file: HomePage.js ~ line 8 ~ HomePage ~ data", data);
  return (
    <Layout>
      <img
        src="https://74.arrowhitech.net/g3/MMER2201MCS_Mercy_Ship/wp-content/uploads/2022/08/190517_TW_Gala_2019_Double_Pages.pdf"
        alt=""
      />
    </Layout>
  );
};

export default HomePage;
