
import React, { useState} from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { IconShare, IconDownload, IconFavorite } from "../../icon";
import "./BottomMediaDetail.scss"



const BottomMediaDetail = ({dataItemB}) => {

    const { storedValue, setValue } = useLocalStorage("favoriteValue", []);
    console.log("🚀 ~ file: BottomMediaDetail.js ~ line 12 ~ BottomMediaDetail ~ storedValue", storedValue)
    const handleFavorites = () =>{
        setValue(dataItemB?.posts?.edges);
    }
       
    return (
        <div className="bottom-layout">
        <div className="bottom-layout-icon">
            <div className="icon-share"><IconShare/></div>
            <div className="icon-download"><IconDownload/></div>
            <div className="icon-favorite"><IconFavorite onClick={() =>  handleFavorites()}/></div>
            <div className="btnDiv">
                <button id="btnDownload" value="download">
                    Download
                </button>
            </div>
        </div>
            
        </div>
    );
};

export default BottomMediaDetail;