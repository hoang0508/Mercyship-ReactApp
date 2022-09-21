import React, { useEffect } from "react";
import Bottom from "../components/layout/Bottom/Bottom";
import Layout from "../components/layout/Layout";
import { useMercyShip } from "../context/MercyshipContext";
import ScreensAssets from "../modules/screensAssets/ScreensAssets";
import CategoriesList from "../modules/categories/CategoriesList";
import ScreenMyFavoritesGird from "../modules/screensAssets/ScreenMyFavoritesGrid";
import ScreenMyFavoritesList from "../modules/screensAssets/ScreenMyFavoritesList";
const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [toggleViewMode, setToggleViewMode] = useState(false);

  const [favoriteItems, setFavoriteItems] = useState([]);
  //setItems --> add objects to localStorage whenever the value of state changed
  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);
  //getItems --> fetch all items on first render (when the component mounts or re-renders) --> obtains all datas from localStorage
  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favoriteItems"));
    if (favoriteItems) {
      setFavoriteItems(favoriteItems);
    }
  }, []);
  useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const searcItemsResult = items.filter((items) =>
      items.toLowerCase()._.includes(searchTerm)
    );
    setSearchResult(searcItemsResult);
  }, [searchTerm]);

  //   if (error) {
  //     return <>{error.message}</>;
  // } else if (!isLoaded) {
  //     return <>loading...</>;
  // } else {
  //     return (
  //     <div className="wrapper">
  //     <ul className="">
  //         	{items.map((item) => (
  //                     <li>
  //                         <div className="items-content">
  //                             <h1>{items.name}</h1>
  //                         </div>
  //                     </li>
  //             ))}
  //     </ul>
  //     </div>
  //     )

  return (
    <>
      <Layout>
     <ScreenMyFavoritesGird></ScreenMyFavoritesGird>
      </Layout>
      <div className="flex-view-mode">
        <button
          className="toggle-view-mode"
          onClick={setToggleViewMode(!toggleViewMode)}
        >
          {toggleViewMode ? "grid" : "list"}
        </button>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <ul>
          {searchResult.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
