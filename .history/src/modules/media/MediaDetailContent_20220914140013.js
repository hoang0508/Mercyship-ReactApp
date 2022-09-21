import React from "react";
import { v4 } from "uuid";
const MediaDetailContent = ({ dataMediaContent }) => {
  console.log(dataMediaContent);
  return (
    
    
          dataMediaContent.map((item) => (
            <React.Fragment key={v4()}>
              {item?.node?.acfMedia?.type === "image" && (
                <div className="screen-assets--image" >  
                  <img
                    src={item?.node?.acfMedia?.image?.sourceUrl}
                    alt=""
                    
                  />
                  <span className="thumb-text thumb-text--img">Image</span>
                </div>
              
              )}
            </React.Fragment>
  
  )))
}

export default MediaDetailContent;
