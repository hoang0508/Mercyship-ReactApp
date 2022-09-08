import React from "react";
import Layout from "../components/layout/Layout";
import ScreensAssets from "../modules/screensAssets/ScreensAssets";

const HomePage = () => {
  return (
    <Layout>
      <div className="square-layout">
        <ScreensAssets></ScreensAssets>
      </div>
    </Layout>
  );
};

export default HomePage;
