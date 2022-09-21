
import React, { useState} from "react";
import { IconShare, IconDownload, IconFavorite } from "../../icon";
import "./BottomMediaDetail.scss"



const BottomMediaDetail = ({dataItemB}) => {
    console.log("🚀 ~ file: BottomMediaDetail.js ~ line 9 ~ BottomMediaDetail ~ dataItemB", dataItemB)
    const handleFavorites = () =>{

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