import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useMercyShip } from "../context/MercyshipContext";
import onErrorImg from "../hooks/useErrorImg";
import ScreensAssets from "../modules/screensAssets/ScreensAssets";
import { FilterDocument } from "../utils/filter/FilterDocuments";
import FilterImages from "../utils/filter/FilterImages";
import FilterVideo from "../utils/filter/FilterVideo";

const HomePage = () => {
  // const dataDocument = FilterDocument();

  // const dataImages = FilterImages();
  // const dataVideo = FilterVideo();

  return (
    <Layout>
      <ScreensAssets></ScreensAssets>
    </Layout>
  );
};

export default HomePage;
