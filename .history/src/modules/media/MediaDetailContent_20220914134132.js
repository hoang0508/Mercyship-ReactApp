import React from 'react';

const MediaDetailContent = ({dataMediaContent}) => {
    console.log(dataMediaContent)
    return (
        dataMediaContent.map((item) => (
            <div>
            <img
            src={item?.node?.acfMedia?.image?.sourceUrl}
            ></img>
        </div>
            
            ))

        
    )
};

export default MediaDetailContent;