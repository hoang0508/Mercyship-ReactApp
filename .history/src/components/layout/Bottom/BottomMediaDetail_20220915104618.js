
import React from "react";
import {IconDownload, IconFavorite, IconShare}  from "../../icon"
import "./BottomMediaDetail.scss"
const functionButton = [
    {
        id: 1,
        icon: <IconShare/>,
        title:"Favorite",
    },
    {
        id: 2,
        icon: <IconDownload/>,
        title:"Download",
    },
    {
        id: 3,
        icon: <IconFavorite/>,
        title:"Share",
    },
]



const BottomMediaDetail = () => {
    return (
        <div className="bottom-media-detail-layout">
            <div className="bottom-media-detail--icon">
            <div className="icon-detail">
            {<IconShare/>}
            </div>
            <div className="icon-download">
            { <IconDownload />} 
            </div>
            <div className="icon-favorite">
            {<IconFavorite/>}
            </div>
            </div>
           
        </div>
    );
};

export default BottomMediaDetail;