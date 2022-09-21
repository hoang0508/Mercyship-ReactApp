import React, { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { v4 } from "uuid";
import parse from "html-react-parser";
import "./MyFavoritesContent.scss";

const MyFavoritesContent = ({ dataMyFavoritesContent }) => {
 
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const getDataFromStorage = () =>{
        console.log(data)
        try {
            const arrayOfData = localStorage.getItem('favoriteValue');
            const d = arrayOfData !== null ? JSON.parse(arrayOfData) : [];
            setData(d) 
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
    </div>
    
  );
};

export default MyFavoritesContent;
