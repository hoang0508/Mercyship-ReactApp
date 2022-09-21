
import React from "react";
import {IconArrowLeft, IconArrowRight, } from "../../icon"
import "./BottomMediaDetail.scss"
const functionButton = [
    {
        id: 1,
        icon: <IconArrowLeft/>,
        title:"Favorite",
    },
    {
        id: 2,
        icon: <IconArrowLeft/>,
        title:"Download",
    },
    {
        id: 3,
        icon: <IconArrowLeft/>,
        title:"Share",
    },
]



const BottomMediaDetail = () => {
    return (
        <div className="bottom-media-detail-layout">
            <div className="bottom-media-detail--icon"></div>
            <div>
            {<IconArrowLeft/>}
              { <IconArrowLeft />}
              {<IconArrowLeft/>}
            </div>
        </div>
    );
};

export default BottomMediaDetail;