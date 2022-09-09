import React, { useEffect } from "react";
import Bottom from "../components/layout/Bottom/Bottom";
import Layout from "../components/layout/Layout";
import { useMercyShip } from "../context/MercyshipContext";
import ScreensAssets from "../modules/screensAssets/ScreensAssets";
import CategoriesList from "../modules/categories/CategoriesList";

const HomePage = () => {
  const { setIsSearchView, viewList } = useMercyShip();

  useEffect(() => {
    setIsSearchView(true);
  }, [setIsSearchView]);
  return (
    <>
      {viewList ? (
        <CategoriesList />
      ) : (
        <Layout isTabLink>
          <div className="square-layout">
            <ScreensAssets></ScreensAssets>
          </div>
          <Bottom isFilter></Bottom>
        </Layout>
      )}
    </>
  );
};

export default HomePage;
