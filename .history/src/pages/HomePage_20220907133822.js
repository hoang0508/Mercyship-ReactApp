import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useMercyShip } from "../context/MercyshipContext";
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

  const { dataAssest } = useMercyShip();
  console.log(
    "🚀 ~ file: HomePage.js ~ line 32 ~ HomePage ~ dataAssest",
    dataAssest
  );

  return (
    <Layout>
      {dataAssest &&
        dataAssest.length > 0 &&
        dataAssest.map((item) => (
          <>
            {item?.node?.acfMedia?.type === "image" && (
              <div>
                <img src={item?.node?.acfMedia?.image?.sourceUrl} alt="" />
              </div>
            )}
          </>
        ))}
    </Layout>
  );
};

export default HomePage;
