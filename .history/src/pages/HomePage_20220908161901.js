import React from "react";
import Bottom from "../components/layout/Bottom/Bottom";
import Layout from "../components/layout/Layout";
import ScreensAssets from "../modules/screensAssets/ScreensAssets";

const HomePage = () => {
  return (
    <Layout>
      <div className="square-layout">
        <ScreensAssets></ScreensAssets>
      </div>
      <Bottom></Bottom>
    </Layout>
  );
};

export default HomePage;
