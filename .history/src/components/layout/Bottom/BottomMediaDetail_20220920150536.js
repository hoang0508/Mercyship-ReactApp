
import React, { useState} from "react";
import { IconShare, IconDownload, IconFavorite } from "../../icon";
import "./BottomMediaDetail.scss"



const BottomMediaDetail = () => {
    
       
    return (
        <div className="bottom-layout">
        <div className="bottom-layout-icon">
            <div className="icon-share"><IconShare/></div>
            <div className="icon-download"><IconDownload/></div>
            <div className="icon-favorite"><IconFavorite/></div>
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