import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const CollectionPage = lazy(() => import("./pages/CollectionPage"));

function App() {
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
