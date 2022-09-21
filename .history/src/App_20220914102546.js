import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MediaDetailPage from "./pages/MediaDetailPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const CollectionPage = lazy(() => import("./pages/CollectionPage"));
const MediaListPage = lazy(() => import("./pages/MediaListPage"));
const MediaDetailPage = lazy(() => import("./pages/MediaDetailPage

function App() {
  return (
    <>
      <Suspense
        fallback={<div className="circle-loading loading-screen"></div>}
      >
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/collections" element={<CollectionPage />}></Route>
          <Route path="/collections/:id" element={<MediaListPage />}></Route>
          <Route path="/mediaDetial/:id" element={<MediaDetailPage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
