import { useState, useLocalStorage } from "react";

export default function useLocalStorage(){

    const { favorite, setFavorite } = useLocalStorage("favoriteValue", [])
}




