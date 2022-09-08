import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useMercyShip } from "../context/MercyshipContext";
import onErrorImg from "../hooks/useErrorImg";
import ScreensAssets from "../modules/screensAssets/ScreensAssets";
import { FilterDocument } from "../utils/filter/FilterDocuments";
import FilterImages from "../utils/filter/FilterImages";
import FilterVideo from "../utils/filter/FilterVideo";

const HomePage = () => {
  // const dataImages = FilterImages();

  return (
    <Layout>
      <div className="square-layout">
        <ScreensAssets></ScreensAssets>
      </div>
    </Layout>
  );
};

export default HomePage;
