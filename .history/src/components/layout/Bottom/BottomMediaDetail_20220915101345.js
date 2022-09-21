import { useQuery } from "@apollo/client";
import { iteratorSymbol } from "immer/dist/internal";
import React, { useEffect, useState } from "react";
import {IconFavorite, IconShare, IconDownload} from "../../icon"
import "./BottomMediaDetail.scss"
const functionButton = [
    {
        id: 1,
        icon: <IconFavorite/>,
        title:"Favorite",
    },
    {
        id: 2,
        icon: <IconDownload/>,
        title:"Download",
    },
    {
        id: 3,
        icon: <IconShare/>,
        title:"Share",
    },
]



const BottomMediaDetail = () => {
    return (
        <div className="bottom-media-detail-layout">
            <div className="bottom-media-detail--icon"></div>
            <span>
                {<IconShare/>}
                {<IconDownload/>}
                {<IconFavorite/>}
            </span>
        </div>
    );
};

export default BottomMediaDetail;