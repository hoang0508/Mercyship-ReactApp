import React from "react";
import { useNavigate } from "react-router-dom";



import IconBack from "../../icon/IconBack";
import IconDetail from "../../icon/IconDetail";


export const TabMediaDetail = () => {

    const navigateBack = useNavigate()
    const navigateDetail = useNavigate();

    const handleClickBack = () => {
        navigateBack(-1)
    }
    const handleNavigateDetail = (id) => {
        navigateDetail(`/mediaDetail/${id}`)
      }
    
  return (
    <>
    <div className="tab">
    <div className="tab-detail">
    <div className="icon-back" onClick={() => handleClickBack()} >
    <IconBack />
    </div>
     <div className="icon-detail"  onClick={() => handleNavigateDetail()} >
       <IconDetail/>
       
        
     </div>
     
    </div>
    </div>
      
    </>
  );
};

export default TabMediaDetail;
