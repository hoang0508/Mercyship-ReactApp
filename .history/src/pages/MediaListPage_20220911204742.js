import React from "react";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import Back from "../components/back/Back";
import Layout from "../components/layout/Layout";
import { useMercyShip } from "../context/MercyshipContext";
import MediaList from "../modules/media/MediaList";

const MediaListPage = () => {
  const { id } = useParams();
  const { dataCategory } = useMercyShip();
  const dataListMedia = dataCategory?.categories?.edges?.filter(
    (item) => item?.node?.databaseId === Number(id)
  );
  const tabTextMedia =
    dataListMedia && dataListMedia.map((item) => item?.node?.name);
  return (
    <>
      <Layout isTabMedia={tabTextMedia}>
        <div className="grid-list">
          {dataListMedia &&
            dataListMedia.length > 0 &&
            dataListMedia.map((item) => (
              <MediaList key={v4()} dataList={item}></MediaList>
            ))}
        </div>
      </Layout>
      <Back />
    </>
  );
};

export default MediaListPage;
