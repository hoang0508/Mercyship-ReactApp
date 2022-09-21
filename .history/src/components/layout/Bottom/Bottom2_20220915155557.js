
import React, { useState} from "react";
import { IconShare, IconDownload, IconFavorite } from "../../icon";
import "./Bottom2.scss"



const Bottom2 = () => {
    return (
        <div className="bottom-layout">
        <div className="bottom-layout-icon">
            <div className="icon-share"><IconShare/></div>
            <div className="icon-share"><IconDownload/></div>
            <div className="icon-share"><IconFavorite/></div>
            <IconShare/>
            
           
        </div>
            
        </div>
    );
};

export default Bottom2;