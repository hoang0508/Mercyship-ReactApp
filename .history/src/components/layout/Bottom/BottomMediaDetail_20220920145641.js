
import React, { useState} from "react";
import { IconShare, IconDownload, IconFavorite } from "../../icon";
import "./BottomMediaDetail.scss"



const BottomMediaDetail = () => {
    const downloadFile = () => {
        //text content
        const texts = ["line 1", "line 2", "line 3"]
    }
        //file object
    const file = new Blob(texts, {type: 'text/plain'});

        // anchor link
        const element = document.createElement("a");
        element.href = URL.createObjectURL(file)
        element.download = "100ideas-" + Date.now() + ".txt";

        // simulate link click
        document.body.appendChild(element);
        element.click();
    return (
        <div className="bottom-layout">
        <div className="bottom-layout-icon">
            <div className="icon-share"><IconShare/></div>
            <div className="icon-download"><IconDownload/></div>
            <div className="icon-favorite"><IconFavorite/></div>
            <div className="btnDiv">
                <button id="btnDownload" onClick={downloadFile} value="download">
                    Download
                </button>
            </div>
        </div>
            
        </div>
    );
};

export default BottomMediaDetail;