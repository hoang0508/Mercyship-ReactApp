import { useQuery } from "@apollo/client";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { getDataMercy } from "./graphql-client/queries";

const HomePage = lazy(() => import("./pages/HomePage"));
const CollectionPage = lazy(() => import("./pages/CollectionPage"));

function App() {
  const { loading, data } = useQuery(getDataMercy);
  console.log("🚀 ~ file: App.js ~ line 11 ~ App ~ data", data);
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/collections" element={<CollectionPage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
