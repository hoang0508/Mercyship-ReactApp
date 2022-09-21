import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";



import IconBack from "../../icon/IconBack";
import IconDetail from "../../icon/IconDetail";


export const TabMediaDetail = () => {

    const navigateback = useNavigate()

    const handleClickBack = () => {
        navigateback(-1)
      

    }
    
  return (
    <>
    <div className="tab">
    <div className="tab-detail">
    <div className="icon-back" >
    <IconBack />
    </div>
     <div className="icon-detail" onClick={() => handleClickBack()} >
       <IconDetail/>
       
        
     </div>
     
    </div>
    </div>
      
    </>
  );
};

export default TabMediaDetail;
