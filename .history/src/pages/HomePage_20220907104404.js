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

  const { dataImages } = FilterImages();
  console.log(
    "🚀 ~ file: HomePage.js ~ line 40 ~ HomePage ~ dataImages",
    dataImages?.dataImages
  );

  return (
    <Layout>
      {dataImages.dataImages &&
        dataImages.dataImages.length > 0 &&
        dataImages.dataImages.map((item) => (
          <img src={item?.sourceUrl} alt="" />
        ))}
    </Layout>
  );
};

export default HomePage;
