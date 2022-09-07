import React from "react";
import { useMercyShip } from "../../context/MercyshipContext";

export const FilterDocument = () => {
  const { dataArr } = useMercyShip();
  const dataDocument = dataArr.filter(
    (item) => item?.node?.acfMedia?.type === "document"
  );
  return {
    dataDocument,
  };
};
