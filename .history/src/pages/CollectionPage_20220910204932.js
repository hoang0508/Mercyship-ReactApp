import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { useMercyShip } from "../context/MercyshipContext";
import ScreenCollection from "../modules/screensCollections/ScreenCollection";

const CollectionPage = () => {
  const { setIsSearchView } = useMercyShip();
  useEffect(() => {
    setIsSearchView(false);
  }, [setIsSearchView]);
  return (
    <Layout isTabLink>
      <div className="square-layout">
        <ScreenCollection></ScreenCollection>
      </div>
    </Layout>
  );
};

export default CollectionPage;
