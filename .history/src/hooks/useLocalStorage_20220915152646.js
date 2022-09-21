import { useState, useLocalStorage } from "react";

export default function FavoriteItems(){

    const { favorite, setFavorite } = useLocalStorage("favoriteValue", [])

    return(
        <div>

        </div>
    )
}





