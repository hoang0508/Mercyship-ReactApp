import React from "react";
import { v4 } from "uuid";
import { useMercyShip } from "../../context/MercyshipContext";
import onErrorImg from "../../hooks/useErrorImg";
import "./ScreensAssets.scss";
const ScreensAssets = () => {
  const { dataAssest } = useMercyShip();
  console.log(
    "🚀 ~ file: ScreensAssets.js ~ line 8 ~ ScreensAssets ~ dataAssest",
    dataAssest
  );

  return (
    <div className="screen-assets--list">
      {dataAssest &&
        dataAssest.length > 0 &&
        dataAssest.map((item) => (
          <React.Fragment key={v4()}>
            {item?.node?.acfMedia?.type === "image" && (
              <div className="screen-assets--image">
                <img
                  src={item?.node?.acfMedia?.image?.sourceUrl}
                  alt=""
                  onError={(e) => onErrorImg(e)}
                />
                <span className="thumb-text thumb-text--img">Image</span>
              </div>
            )}
            {item?.node?.acfMedia?.type === "document" && (
              <div className="screen-assets--image">
                <img
                  src={item?.node?.acfMedia?.document?.mediaItemUrl}
                  alt=""
                  onError={(e) => onErrorImg(e)}
                />
                <span className="thumb-text">Docs</span>
              </div>
            )}
            {item?.node?.acfMedia?.type === "video" && (
              <div>
                <iframe
                  width="140"
                  height="150"
                  src={`${
                    item?.node?.acfMedia?.videoUrl
                      ? `https://www.youtube.com/embed/${item?.node?.acfMedia?.videoUrl?.slice(
                          -11
                        )}`
                      : ""
                  }`}
                  title="video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </React.Fragment>
        ))}
    </div>
  );
};

export default ScreensAssets;
