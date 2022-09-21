import React from "react";
import { v4 } from "uuid";
const MediaDetailContent = ({ dataMediaContent }) => {
  console.log(dataMediaContent);
  return (
    
    dataMediaContent.length > 0 &&
          dataMediaContent.map((item) => (
            <React.Fragment key={v4()}>
              {item?.node?.acfMedia?.type === "image" && (
                <div className="screen-assets--image" onClick={() => handleNavigate(item?.node?.databaseId)}>  
                  <img
                    src={item?.node?.acfMedia?.image?.sourceUrl}
                    alt=""
                    onError={(e) => onErrorImg(e)}
                  />
                  <span className="thumb-text thumb-text--img">Image</span>
                </div>
              
              )}
            </React.Fragment>
  
  ))
}

export default MediaDetailContent;
