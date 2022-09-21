import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { useMercyShip } from "../../context/MercyshipContext";
import onErrorImg from "../../hooks/useErrorImg";
import "./ScreensAssets.scss";
const ScreensAssets = () => {
  const { dataAssest, loading, inputTextSearch } = useMercyShip();
  const [loadingSearch, setLoadingSearch] = useState(true);
  useEffect(() => {
    if (dataAssest && dataAssest.length > 0) {
      setLoadingSearch(false);
    } else {
      setLoadingSearch(true);
    }
  }, [dataAssest]);
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/mediaDetail/${id}`);
  };
  return (
    <>
      {loading && dataAssest?.length === 0 && (
        <div className="circle-loading loading"></div>
      )}
      {inputTextSearch && (
        <>
          {loadingSearch ? <div className="circle-loading loading"></div> : ""}
        </>
      )}
      {dataAssest?.length === 0 && (
        <span className="error-data">Không tìm thấy dữ liệu nào!!</span>
      )}
      <div className="screen-assets--lis grid-list">
        {!loading &&
          dataAssest &&
          dataAssest.length > 0 &&
          dataAssest.map((item) => (
            <React.Fragment key={v4()}>
              {item?.node?.acfMedia?.type === "image" && (
                <div
                  className="screen-assets--image"
                  onClick={() => handleNavigate(item?.node?.databaseId)}
                >
                  <img
                    src={item?.node?.acfMedia?.image?.sourceUrl}
                    alt=""
                    onError={(e) => onErrorImg(e)}
                  />
                  <span className="thumb-text thumb-text--img">Image</span>
                </div>
              )}
              {item?.node?.acfMedia?.type === "document" && (
                <div
                  className="screen-assets--image"
                  onClick={() => handleNavigate(item?.node?.databaseId)}
                >
                  <img
                    src={item?.node?.acfMedia?.document?.mediaItemUrl}
                    alt=""
                    onError={(e) => onErrorImg(e)}
                  />
                  <span className="thumb-text">Docs</span>
                </div>
              )}
              {item?.node?.acfMedia?.type === "video" && (
                <div
                  className="screen-assets--image"
                  onClick={() => handleNavigate(item?.node?.databaseId)}
                >
                  <iframe
                    width="140"
                    height="150"
                    src={`${
                      item?.node?.acfMedia?.videoUrl
                        ? `https://www.youtube.com/embed/${item?.node?.acfMedia?.videoUrl?.slice(
                            -11
                          )}`
                        : "/Mercy-default.jpg"
                    }`}
                    title="video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <span className="thumb-text thumb-text--video">Video</span>
                </div>
              )}
            </React.Fragment>
          ))}
      </div>
    </>
  );
};

export default ScreensAssets;
