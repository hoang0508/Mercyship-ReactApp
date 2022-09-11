import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { useMercyShip } from "../context/MercyshipContext";
import CategoriesList from "../modules/categories/CategoriesList";
import ScreenCollection from "../modules/screensCollections/ScreenCollection";

const CollectionPage = () => {
  const { setIsSearchView, viewList } = useMercyShip();
  useEffect(() => {
    setIsSearchView(false);
  }, [setIsSearchView]);
  return (
    <>
      {viewList ? (
        <CategoriesList />
      ) : (
        <Layout isTabLink>
          <div className="square-layout">
            <ScreenCollection></ScreenCollection>
          </div>
        </Layout>
      )}
      <Outlet />
    </>
  );
};

export default CollectionPage;
