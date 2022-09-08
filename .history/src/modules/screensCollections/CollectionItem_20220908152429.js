import React from "react";
import { IconArrowRight } from "../../components/icon";

const CollectionItem = () => {
  return (
    <div className="collection-list--item">
      <div className="collection-list--content">
        <div className="collecton-list--image">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="collection-head">
          <h3 className="collection-title">Global Mercy</h3>
          <span className="collection-number">12</span>
        </div>
      </div>
      <div className="collection-list--icon">
        <IconArrowRight></IconArrowRight>
      </div>
    </div>
  );
};

export default CollectionItem;
