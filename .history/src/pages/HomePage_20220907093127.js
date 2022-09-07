import { useQuery } from "@apollo/client";
import React from "react";
import Layout from "../components/layout/Layout";
import { getCategories, getDataMercy } from "../graphql-client/queries";
import { FilterDocument } from "../utils/filter/FilterDocument";

const HomePage = () => {
  // const dataDocument = dataArr.filter(
  //   (item) => item?.node?.acfMedia?.type === "document"
  // );

  // const dataImages = dataArr.filter(
  //   (item) => item?.node?.acfMedia?.type === "image"
  // );

  // const dataVideo = dataArr.filter(
  //   (item) => item?.node?.acfMedia?.type === "video"
  // );
  // console.log(
  //   "🚀 ~ file: HomePage.js ~ line 22 ~ HomePage ~ dataVideo",
  //   dataVideo
  // );

  const { dataDocument } = FilterDocument();
  // console.log(
  //   "🚀 ~ file: HomePage.js ~ line 26 ~ HomePage ~ dataDocument",
  //   dataDocument
  // );

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
