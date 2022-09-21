import React from "react";
import { v4 } from "uuid";
const MediaDetailContent = ({ dataMediaContent }) => {
  console.log(dataMediaContent);
  return (
    
    <div>
    <img
    src={dataMediaContent?.node?.acfMedia?.image?.sourceUrl} alt=""
    />
     </div>
         
  
  )
}

export default MediaDetailContent;
