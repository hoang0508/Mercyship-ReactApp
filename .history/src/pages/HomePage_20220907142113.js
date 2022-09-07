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
                  <video autoPlay muted loop>
                    <source
                      src={item?.node?.acfMedia?.videoUrl}
                      type="video/mp4"
                    />
                  </video>
                </div>
              )}
            </>
          ))}
      </div>
    </Layout>
  );
};

export default HomePage;
