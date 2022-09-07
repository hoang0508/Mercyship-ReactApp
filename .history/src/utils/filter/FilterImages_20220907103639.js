import { useQuery } from "@apollo/client";
import React from "react";
import { getDataMercy } from "../../graphql-client/queries";

export const FilterImages = () => {
  const { loading, error, data } = useQuery(getDataMercy);

  if (!data) return null;
  const dataArr = data?.posts?.edges;
  const dataDocument = dataArr
    .filter((item) => item?.node?.acfMedia?.type === "image")
    .map((item) => item?.node?.acfMedia?.image);
  console.log(
    "🚀 ~ file: FilterImages.js ~ line 13 ~ FilterImages ~ dataDocument",
    dataDocument
  );

  return {
    sourceUrl: dataDocument?.sourceUrl,
  };
};

export default FilterImages;
