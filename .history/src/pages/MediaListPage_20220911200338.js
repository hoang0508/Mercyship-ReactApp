import React from "react";
import { useParams } from "react-router-dom";

const MediaListPage = () => {
  const param = useParams();
  console.log(
    "🚀 ~ file: MediaListPage.js ~ line 6 ~ MediaListPage ~ param",
    param
  );
  return <div>MediaListPage</div>;
};

export default MediaListPage;
