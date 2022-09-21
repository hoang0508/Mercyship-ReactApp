import React from 'react';

const MediaDetailContent = ({dataMediaContent}) => {
    console.log(dataMediaContent)
    return (

        <div>
            <img src={dataMediaContent}></img>
        </div>
    );
};

export default MediaDetailContent;