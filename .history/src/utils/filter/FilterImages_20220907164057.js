import { useQuery } from "@apollo/client";
import React from "react";
import { getDataMercy } from "../../graphql-client/queries";

export const FilterImages = () => {
  const { loading, error, data } = useQuery(getDataMercy);

  if (!data) return null;
  const dataArr = data?.posts?.edges;
  const dataImages = dataArr.filter(
    (item) => item?.node?.acfMedia?.type === "image"
  );

  return {
    dataImages,
  };
};

export default FilterImages;
