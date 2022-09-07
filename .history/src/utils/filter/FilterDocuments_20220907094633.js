import { useQuery } from "@apollo/client";
import React from "react";
import { useMercyShip } from "../../context/MercyshipContext";
import { getDataMercy } from "../../graphql-client/queries";

export const FilterDocument = () => {
  const { loading, error, data } = useQuery(getDataMercy);

  if (!data) return null;
  const dataArr = data?.posts?.edges;
  const dataDocument = dataArr.filter(
    (item) => item?.node?.acfMedia?.type === "document"
  );
  const itemDoc = dataDocument.map((item) => item?.node?.acfMedia?.document);
  console.log(
    "🚀 ~ file: FilterDocuments.js ~ line 15 ~ FilterDocument ~ itemDoc",
    itemDoc
  );
  const mediaItemUrl = itemDoc?.mediaItemUrl;
  return {
    itemDoc,
    mediaItemUrl,
  };
};
