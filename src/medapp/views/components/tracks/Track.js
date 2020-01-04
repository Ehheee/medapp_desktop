import React from 'react';

const Track = (props) => {
    const showInstances = () => {
        
    };
    return (<div>
                <span>{props.track.artist + ' - ' + props.track.title}</span>
            </div>);
};
export default Track;