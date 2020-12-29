import React from 'react';
import Server from '../../../data/server';
import Synchronizer from '../../../data/synchronizer';

const Track = (props) => {
    const showInstances = () => {
        
    };
    const syncTrack = (track) => {
        Synchronizer.syncTrack(track);
    };
    return (<div>
                <div><span>{props.track.artist + ' - ' + props.track.title + ' - ' + (props.track.synced ? (new Date(props.track.synced)).toLocaleString() : '')}</span><button onClick={() => syncTrack(props.track)}>sync</button></div>
            </div>);
};
export default Track;