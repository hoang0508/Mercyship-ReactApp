import React from "react";
import { v4 } from "uuid";
import parse from "html-react-parser";
const MediaDetailContent = ({ dataMediaContent }) => {
  console.log(dataMediaContent);
  return  (
    <>
<div className="media-detail-content">
    {dataMediaContent &&
        dataMediaContent?.posts?.edges.length > 0 &&
        dataMediaContent?.posts?.edges?.map((item) => ( 
            <>

            {item?.node?.acfMedia?.type === "image" && (
              <div>
                <div key={v4()}>
                  <img
                    src={
                      item?.node?.acfMedia?.image?.sourceUrl ||
                      "/Mercy-default.jpg"
                    }
                    alt=""
                  />
                  <h1>{item?.node?.title}</h1>
                  <p>
                    {item?.node?.acfMedia?.image?.description}
                  </p>
                </div>
              </div>
                )
             }
             {item?.node?.acfMedia?.type === "document" &&(
              <div>
                <div key={v4()}
                <img 
                  src={ "/Mercy-default.jpg"} alt=""
                />
              </div>
             )}
            </>
        )
    )}
</div>
      
    </>
    
  )}

export default MediaDetailContent;
