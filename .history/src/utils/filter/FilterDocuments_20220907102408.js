import { useQuery } from "@apollo/client";
import React from "react";
import { useMercyShip } from "../../context/MercyshipContext";
import { getDataMercy } from "../../graphql-client/queries";

export const FilterDocument = () => {
  const { loading, error, data } = useQuery(getDataMercy);

  if (!data) return null;
  const dataArr = data?.posts?.edges;
  const dataDocument = dataArr
    .filter((item) => item?.node?.acfMedia?.type === "document")
    .map((item) => item?.node?.acfMedia?.document);

  const itemImagesDoc = dataDocument
    .map((item) => item)
    .map((item) => item.mediaItemUrl)
    .join(" ");

  return {
    itemImagesDoc,
  };
};
