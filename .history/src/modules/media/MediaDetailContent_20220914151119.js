import React from "react";
import { v4 } from "uuid";
const MediaDetailContent = ({ dataMediaContent }) => {
  console.log(dataMediaContent);
  return (
    <>
{
    dataMediaContent &&
    dataMediaContent?.posts?.edges?.map((item) => (
        <div>
        <img src={item?.posts?.edges?.node?.acfMedia?.image?.sourceUrl} alt="" />
        <h1>{item?.posts?.edges?.node?.categories?.title}</h1>
      </div>

    ))
}
    </>

  );
};

export default MediaDetailContent;
