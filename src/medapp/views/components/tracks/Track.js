import React, { useState } from 'react';
import Server from '../../../data/server';
import Synchronizer from '../../../data/synchronizer';
import TrackInfo from './TrackInfo';

const Track = (props) => {
    const [isInfoVisible, setIsInfoVisible] = useState();
    const showInstances = () => {
        
    };
    const syncTrack = (track) => {
        Synchronizer.syncTrack(track);
    };
    
    const toggleTrackInfoVisible = (evt) => {
        if (isInfoVisible) {
            setIsInfoVisible(() => false);
        } else {
            setIsInfoVisible(() => true);
        }
    };
    return (<div className='track borderThinSolid flexTableRow rowPadding'>
                <div className='btn w70 flexTableRow flexListItemLeft'>
                    <div onClick={(evt) => toggleTrackInfoVisible(evt)} className={'musicTitle' + (isInfoVisible ? ' musicTitleActive' : '')}>{props.track.artist}</div>
                    <div onClick={(evt) => toggleTrackInfoVisible(evt)} className={'musicTitle flexListItemLeft'  + (isInfoVisible ? ' musicTitleActive' : '')}>{props.track.title}</div>
                </div>
                <div className='' style={{'margin-right': '1em'}}>{(props.track.synced ? (new Date(props.track.synced)).toLocaleString() : '')}</div>
                <button onClick={() => syncTrack(props.track)}>sync</button>
                
                <div className='break'></div>
                {isInfoVisible && <TrackInfo track={props.track}></TrackInfo>}
            </div>);
};
export default Track;