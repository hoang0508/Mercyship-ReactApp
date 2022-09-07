import React, { useEffect, useState } from "react";
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

  const dataDocument = FilterDocument();
  console.log(
    "🚀 ~ file: HomePage.js ~ line 33 ~ HomePage ~ dataDocument",
    dataDocument
  );
  const dataImages = FilterImages();
  const dataVideo = FilterVideo();
  console.log(
    "🚀 ~ file: HomePage.js ~ line 35 ~ HomePage ~ dataVideo",
    dataVideo
  );

  const [dataAssest, setDataAssets] = useState([]);

  useEffect(() => {
    setDataAssets([
      dataDocument?.dataDocument,
      dataImages?.dataImages,
      dataVideo?.dataVideo,
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(
    "🚀 ~ file: HomePage.js ~ line 47 ~ HomePage ~ dataAssest",
    dataAssest
  );
  return (
    <Layout>
      {/* <button>Click me</button> */}
      {/* {dataImages.dataImages &&
        dataImages.dataImages.length > 0 &&
        dataImages.dataImages.map((item) => (
          <img src={item?.sourceUrl} alt="" />
        ))} */}
    </Layout>
  );
};

export default HomePage;
