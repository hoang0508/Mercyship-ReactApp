
import React, { useState} from "react";
import { IconShare, IconDownload, IconFavorite } from "../../icon";
import "./Bottom2.scss"



const Bottom2 = () => {
    return (
        <div className="bottom-layout">
        <div className="bottom-layout-icon">
            <IconShare/>
            <IconDownload/>
            <IconFavorite/>
        </div>
            
        </div>
    );
};

export default Bottom2;