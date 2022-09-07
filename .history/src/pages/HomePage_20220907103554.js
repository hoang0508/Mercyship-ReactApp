import { useQuery } from "@apollo/client";
import React from "react";
import Layout from "../components/layout/Layout";
import { getCategories, getDataMercy } from "../graphql-client/queries";
import { FilterDocument } from "../utils/filter/FilterDocuments";
import FilterImages from "../utils/filter/FilterImages";

const HomePage = () => {
  // const { loading, error, data } = useQuery(getDataMercy);

  // if (!data) return null;
  // const dataArr = data?.posts?.edges;
  // const dataDocument = dataArr.filter(
  //   (item) => item?.node?.acfMedia?.type === "document"
  // );
  // console.log(
  //   "🚀 ~ file: HomePage.js ~ line 11 ~ HomePage ~ dataDocument",
  //   dataDocument
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

  const itemImagesDoc = FilterDocument();
  console.log(
    "🚀 ~ file: HomePage.js ~ line 33 ~ HomePage ~ itemImagesDoc",
    itemImagesDoc
  );

  const sourceUrl = FilterImages();
  console.log(
    "🚀 ~ file: HomePage.js ~ line 40 ~ HomePage ~ sourceUrl",
    sourceUrl
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
