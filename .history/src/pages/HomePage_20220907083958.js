import { useQuery } from "@apollo/client";
import React from "react";
import Layout from "../components/layout/Layout";
import { getCategories, getDataMercy } from "../graphql-client/queries";

const HomePage = () => {
  const { loading, error, data } = useQuery(getDataMercy);

  if (!data) return null;
  const dataArr = data?.posts?.edges;
  const dataDocument = dataArr.map((item) => item);
  console.log(
    "🚀 ~ file: HomePage.js ~ line 13 ~ HomePage ~ dataDocument",
    dataDocument
  );

  return (
    <Layout>
      {/* <img
        src="https://74.arrowhitech.net/g3/MMER2201MCS_Mercy_Ship/wp-content/uploads/2022/08/190517_TW_Gala_2019_Double_Pages.pdf"
        alt=""
      /> */}
    </Layout>
  );
};

export default HomePage;
