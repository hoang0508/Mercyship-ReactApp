import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useMercyShip } from "../context/MercyshipContext";
import onErrorImg from "../hooks/useErrorImg";
import { FilterDocument } from "../utils/filter/FilterDocuments";
import FilterImages from "../utils/filter/FilterImages";
import FilterVideo from "../utils/filter/FilterVideo";

const HomePage = () => {
  const dataDocument = FilterDocument();

  const dataImages = FilterImages();
  const dataVideo = FilterVideo();

  const { dataAssest } = useMercyShip();
  console.log(
    "🚀 ~ file: HomePage.js ~ line 17 ~ HomePage ~ dataAssest",
    dataAssest
  );

  const demo =
    dataAssest &&
    dataAssest.length > 0 &&
    dataAssest
      .filter((item) => item?.node?.acfMedia?.type === "video")
      .map((item) => item?.node?.acfMedia?.videoUrl.slice(-1, -8));
  console.log("🚀 ~ file: HomePage.js ~ line 22 ~ HomePage ~ demo", demo);

  return (
    <Layout>
      <div>
        {dataAssest &&
          dataAssest.length > 0 &&
          dataAssest.map((item) => (
            <>
              {item?.node?.acfMedia?.type === "image" && (
                <div>
                  <img
                    src={item?.node?.acfMedia?.image?.sourceUrl}
                    alt=""
                    onError={(e) => onErrorImg(e)}
                  />
                </div>
              )}
              {item?.node?.acfMedia?.type === "document" && (
                <div>
                  <img
                    src={item?.node?.acfMedia?.document?.mediaItemUrl}
                    alt=""
                    onError={(e) => onErrorImg(e)}
                  />
                </div>
              )}
              {item?.node?.acfMedia?.type === "video" && (
                <div>
                  <iframe
                    src={item?.node?.acfMedia?.videoUrl}
                    title="video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
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
