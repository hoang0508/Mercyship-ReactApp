import React from "react";
import { useMercyShip } from "../../context/MercyshipContext";
import onErrorImg from "../../hooks/useErrorImg";
import "./ScreensAssets.scss";
const ScreensAssets = () => {
  const { dataAssest } = useMercyShip();

  return (
    <div className="screen-assets--list">
      {dataAssest &&
        dataAssest.length > 0 &&
        dataAssest.map((item) => (
          <>
            {item?.node?.acfMedia?.type === "image" && (
              <div className="screen-assets--image">
                <img
                  src={item?.node?.acfMedia?.image?.sourceUrl}
                  alt=""
                  onError={(e) => onErrorImg(e)}
                />
              </div>
            )}
            {item?.node?.acfMedia?.type === "document" && (
              <div className="screen-assets--image">
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
                  width="140"
                  height="150"
                  src={`https://www.youtube.com/embed/${item?.node?.acfMedia?.videoUrl.slice(
                    -11
                  )}`}
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
  );
};

export default ScreensAssets;
