import React from "react";
import { NavLink } from "react-router-dom";
import "./MyFavoritesTabList.scss"

const MyFavoritesTabList = () => {
    return(
        <div className="my-favorites-tab-list">
            <NavLink
            to ={"/"}
            className={({ isActive }) =>
            isActive ? "my-favorites-tab-list-link my-favorites-tab-list-link--active" : "my-favorites-tab-list-link "
            } 
            >
                Gobal Mercy
            </NavLink>
            <NavLink 
            to="/Patients"
        className={({ isActive }) =>
          isActive ? "my-favorites-tab-list-link my-favorites-tab-list-link--active" : "my-favorites-tab-list-link "
        }
        >
                Patients
            </NavLink>
            
            <NavLink 
            to="/Volunteers"
        className={({ isActive }) =>
          isActive ? "my-favorites-tab-list-link my-favorites-tab-list-link--active" : "my-favorites-tab-list-link "
        }
        >
                Volunteers
            </NavLink>
         </div>
    )
}
export default MyFavoritesTabList