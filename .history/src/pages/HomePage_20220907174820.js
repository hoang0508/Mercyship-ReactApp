import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useMercyShip } from "../context/MercyshipContext";
import { getDataMercy } from "../graphql-client/queries";
import onErrorImg from "../hooks/useErrorImg";
import ScreensAssets from "../modules/screensAssets/ScreensAssets";
import { FilterDocument } from "../utils/filter/FilterDocuments";
import FilterImages from "../utils/filter/FilterImages";
import FilterVideo from "../utils/filter/FilterVideo";

const HomePage = () => {
  const { loading, error, data } = useQuery(getDataMercy);

  // console.log(data);

  return (
    <Layout>
      <div className="square-layout">
        <ScreensAssets></ScreensAssets>
      </div>
    </Layout>
  );
};

export default HomePage;
