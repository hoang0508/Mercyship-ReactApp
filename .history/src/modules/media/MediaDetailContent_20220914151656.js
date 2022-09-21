import React from "react";
import { v4 } from "uuid";
const MediaDetailContent = ({ dataMediaContent }) => {
  console.log(dataMediaContent);
  return (
    <>
{
    dataMediaContent &&
    dataMediaContent?.posts?.edges?.map((item) => (
        <div key={v4()}>
        <img src={item?.node?.acfMedia?.image?.sourceUrl} alt="" />
        <h1>{item?.node?.title}</h1>
        <p>{item?.node?.acfMedia?.image?.description}</p>
      </div>
    ))

    
}
    </>

  );
};

export default MediaDetailContent;
