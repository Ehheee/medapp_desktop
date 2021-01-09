import React from 'react';
import Track from './Track';

const TrackList = (props) => {
    const createTracks = (tracks) => {
        return tracks.map((track) => {
            return (<Track key={track.id} track={track}></Track>);
        });
    };
    return (<div className="trackList">
                {createTracks(props.tracks)}
            </div>)
};

export default TrackList;