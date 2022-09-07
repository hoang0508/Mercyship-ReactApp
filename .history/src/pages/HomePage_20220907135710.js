import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useMercyShip } from "../context/MercyshipContext";
import onErrorImg from "../hooks/useErrorImg";
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

  const dataImages = FilterImages();
  const dataVideo = FilterVideo();

  const { dataAssest } = useMercyShip();

  const demo =
    dataAssest &&
    dataAssest.length > 0 &&
    dataAssest.filter((item) => item?.node?.acfMedia?.type === "document");
  console.log("🚀 ~ file: HomePage.js ~ line 37 ~ HomePage ~ demo", demo);

  return (
    <Layout>
      <div>
        {dataAssest &&
          dataAssest.length > 0 &&
          dataAssest.map((item) => (
            <>
              {/* {item?.node?.acfMedia?.type === "image" && (
                <div>
                  <img
                    src={item?.node?.acfMedia?.image?.sourceUrl}
                    alt=""
                    onError={(e) => onErrorImg(e)}
                  />
                </div>
              )} */}
              {item?.node?.acfMedia?.type === "document" && (
                <div>
                  <img
                    src={item?.node?.acfMedia?.document?.mediaItemUrl}
                    alt=""
                    onError={(e) => onErrorImg(e)}
                  />
                </div>
              )}
            </>
          ))}
      </div>
    </Layout>
  );
};

export default HomePage;
