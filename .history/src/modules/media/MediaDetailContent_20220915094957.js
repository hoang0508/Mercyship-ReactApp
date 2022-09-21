import React from "react";
import { v4 } from "uuid";
import parse from "html-react-parser";
import "./MediaDetailContent";

const MediaDetailContent = ({ dataMediaContent }) => {
  console.log(dataMediaContent);
  return (
    <>
      <div className="media-detail-content">
        {dataMediaContent &&
          dataMediaContent?.posts?.edges.length > 0 &&
          dataMediaContent?.posts?.edges?.map((item) => (
            <>
              {item?.node?.acfMedia?.type === "image" && (
                <div>
                  <div key={v4()}>
                    <img className="image"
                      src={
                        item?.node?.acfMedia?.image?.sourceUrl ||
                        "/Mercy-default.jpg"
                      }
                      alt=""
                    />
                    <h1>{item?.node?.title}</h1>
                    <p>{item?.node?.acfMedia?.image?.description}</p>
                  </div>
                </div>
              )}
              {item?.node?.acfMedia?.type === "document" && (
                <div>
                  <div key={v4()} />
                  <img src={"/Mercy-default.jpg"} alt="" />
                  <h1>{item?.node?.title}</h1>
                </div>
              )}

              {item?.node?.acfMedia?.type === "video" && (
                <div>
                  <div key={v4()} />
                  <video width="730" height="680" controls>
                    <source src={item?.node?.acfMedia?.videoUrl} />
                  </video>
                  <h1>{item?.node?.title}</h1>
                </div>
              )}
            </>
          ))}
      </div>
    </>
  );
};

export default MediaDetailContent;
