
import React  from "react";
import { useMercyShip } from "../../../context/MercyshipContext";
import { IconShare, IconDownload, IconFavorite } from "../../icon";
import "./BottomMediaDetail.scss"



const BottomMediaDetail = ({dataItemB}) => {
    const {setValue} = useMercyShip();
    
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