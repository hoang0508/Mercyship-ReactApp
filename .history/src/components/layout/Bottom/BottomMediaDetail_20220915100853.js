import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {IconFavorite, IconShare, IconDownload} from "../../icon"

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