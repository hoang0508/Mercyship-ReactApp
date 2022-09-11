import React from "react";
import { useNavigate } from "react-router-dom";
import { IconArrowRight } from "../../components/icon";
import onErrorImg from "../../hooks/useErrorImg";

const CollectionItem = ({ data }) => {
  const navigate = useNavigate();
  const handleNavigateMedia = (id) => {
    navigate(`${id}`);
  };
  return (
    <div
      className="collection-list--item"
      onClick={() => handleNavigateMedia(data?.databaseId)}
    >
      <div className="collection-list--content">
        <div className="collection-list--image">
          <img
            src={
              data?.acfMediaCategory?.image?.sourceUrl || "/Mercy-default.jpg"
            }
            alt=""
            onError={(e) => onErrorImg(e)}
          />
        </div>
        <div className="collection-head">
          <h3 className="collection-title">{data?.name}</h3>
          <span className="collection-number">{data?.databaseId}</span>
        </div>
      </div>
      <div className="collection-list--icon">
        <IconArrowRight></IconArrowRight>
      </div>
    </div>
  );
};

export default CollectionItem;
