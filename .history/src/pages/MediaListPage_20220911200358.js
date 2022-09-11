import React from "react";
import { useParams } from "react-router-dom";

const MediaListPage = () => {
  const { id } = useParams();
  console.log("🚀 ~ file: MediaListPage.js ~ line 6 ~ MediaListPage ~ id", id);

  return <div>MediaListPage</div>;
};

export default MediaListPage;
