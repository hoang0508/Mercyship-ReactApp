import React, { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { v4 } from "uuid";
import parse from "html-react-parser";
import "./MyFavoritesContent.scss";

const MyFavoritesContent = ({ dataMyFavoritesContent }) => {
 
    const [data, setData] = useState([])
    const getDataFromStorage = () =>{
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div></div>

  );
};

export default MyFavoritesContent;
