import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { v4 } from "uuid";
import parse from "html-react-parser";
import "./MyFavoritesContent.scss";

const MyFavoritesContent = ({ dataMyFavoritesContent }) => {
  console.log(dataMyFavoritesContent);
  return (

    console.log(storedValue)
    // <>
    //   <div className="media-detail-content">
    //     {dataMyFavoritesContent &&
    //       dataMyFavoritesContent?.posts?.edges.length > 0 &&
    //       dataMyFavoritesContent?.posts?.edges?.map((item) => (
    //         <>
    //           {item?.node?.acfMedia?.type === "image" && (
    //             <div>
    //               <div key={v4()}>
    //                 <img className="image"
    //                   src={
    //                     item?.node?.acfMedia?.image?.sourceUrl ||
    //                     "/Mercy-default.jpg"
    //                   }
    //                   alt=""
    //                 />
    //                 <div className="title-and-description">
    //                 </div>
    //               </div>
    //             </div>
    //           )}
    //           {item?.node?.acfMedia?.type === "document" && (
    //             <div>
    //               <div key={v4()} />
    //               <img src={"/Mercy-default.jpg"} alt="" />
    //             </div>
    //           )}

    //           {item?.node?.acfMedia?.type === "video" && (
    //             <div>
    //               <div key={v4()} />
    //               <video width="700" height="600" controls>
    //                 <source src={item?.node?.acfMedia?.videoUrl} />
    //               </video>
    //               <h1>{item?.node?.title}</h1>
    //             </div>
    //           )}
    //         </>
    //       ))}
    //   </div>
    // </>
  );
};

export default MyFavoritesContent;
