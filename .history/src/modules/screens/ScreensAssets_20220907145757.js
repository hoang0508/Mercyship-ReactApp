import React from "react";
import { useMercyShip } from "../../context/MercyshipContext";
import onErrorImg from "../../hooks/useErrorImg";

const ScreensAssets = () => {
  const { dataAssest } = useMercyShip();

  return (
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
