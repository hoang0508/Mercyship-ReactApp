import React from "react";
import Layout from "../components/layout/Layout";
import { FilterDocument } from "../utils/filter/FilterDocuments";
import FilterImages from "../utils/filter/FilterImages";
import FilterVideo from "../utils/filter/FilterVideo";

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
  const dataImages = FilterImages();
  const dataVideo = FilterVideo();
  console.log(
    "🚀 ~ file: HomePage.js ~ line 35 ~ HomePage ~ dataVideo",
    dataVideo
  );

  return (
    <Layout>
      {/* {dataImages.dataImages &&
        dataImages.dataImages.length > 0 &&
        dataImages.dataImages.map((item) => (
          <img src={item?.sourceUrl} alt="" />
        ))} */}
    </Layout>
  );
};

export default HomePage;
