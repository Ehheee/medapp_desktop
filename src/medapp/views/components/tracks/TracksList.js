import React, {useState, useEffect} from 'react';
import Track from './Track';
import DataAccess from '../../../data/dataAccess';

const TracksList = () => {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        DataAccess.getTracks((tracks) => {
            setTracks(tracks.tracks);
        });
        
    }, []);
    const createTracks = () => {
        return tracks.map((track) => {
            return (<Track track={track}></Track>);
        });
        
    };
    return (<div>
                {createTracks()}
            </div>);
};

export default TracksList;