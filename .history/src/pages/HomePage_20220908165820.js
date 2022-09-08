import React, { useEffect } from "react";
import Bottom from "../components/layout/Bottom/Bottom";
import Layout from "../components/layout/Layout";
import { useMercyShip } from "../context/MercyshipContext";
import ScreensAssets from "../modules/screensAssets/ScreensAssets";

const HomePage = () => {
  const { setIsSearchView } = useMercyShip();

  useEffect(() => {
    setIsSearchView(true);
  }, [setIsSearchView]);
  return (
    <Layout>
      <div className="square-layout">
        <ScreensAssets></ScreensAssets>
      </div>
      <Bottom isFilter></Bottom>
    </Layout>
  );
};

export default HomePage;
