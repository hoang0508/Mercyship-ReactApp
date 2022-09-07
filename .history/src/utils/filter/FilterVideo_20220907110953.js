import { useQuery } from "@apollo/client";
import React from "react";
import { getDataMercy } from "../../graphql-client/queries";

const FilterVideo = () => {
  const { loading, error, data } = useQuery(getDataMercy);

  if (!data) return null;
  const dataArr = data?.posts?.edges;
  const dataVideo = dataArr
    .filter((item) => item?.node?.acfMedia?.type === "video")
    .map((item) => item?.node?.acfMedia);
  // .map((item) => item);
  return {
    dataVideo,
  };
};

export default FilterVideo;
