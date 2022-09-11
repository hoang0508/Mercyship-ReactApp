import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { useMercyShip } from "../context/MercyshipContext";
import MediaList from "../modules/media/MediaList";

const MediaListPage = () => {
  const { id } = useParams();
  const { dataCategory } = useMercyShip();
  const dataListMedia = dataCategory?.categories?.edges?.filter(
    (item) => item?.node?.databaseId === Number(id)
  );
  return (
    <Layout>
      <div className="grid-list">
        <MediaList dataListMedia={dataListMedia}></MediaList>
      </div>
    </Layout>
  );
};

export default MediaListPage;
