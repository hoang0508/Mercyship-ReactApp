import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const CollectionPage = lazy(() => import("./pages/CollectionPage"));
const MediaListPage = lazy(() => import("./pages/MediaListPage"));

function App() {
  return (
    <>
      <Suspense
        fallback={<div className="circle-loading loading-screen"></div>}
      >
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/collections" element={<CollectionPage />}>
            <Route path="/mediaList/id" element={<MediaListPage />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
