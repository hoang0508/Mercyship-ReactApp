import React from "react";
import { NavLink } from "react-router-dom";
import "./MyFavoritesTabGird.scss"

const MyFavoritesTabGird = () => {
    return(
        <div className="my-favorites-tab-gird">
            <NavLink
            to ={"/"}
            className={({ isActive }) =>
            isActive ? "my-favorites-tab-gird-link my-favorites-tab-gird-link--active" : "my-favorites-tab-gird-link "
            } 
            >
                Favorites
            </NavLink>
         </div>
    )
}
export default MyFavoritesTabGird