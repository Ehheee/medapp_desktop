import React, {useState, useEffect} from 'react';
import Track from './Track';
import DataAccess from '../../../data/dataAccess';
import Synchronizer from '../../../data/synchronizer';

const TracksList = () => {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        DataAccess.getTracks((tracks) => {
            setTracks(tracks.tracks);
        });
        
    }, []);
    const createTracks = () => {
        return tracks.map((track) => {
            return (<Track key={track.id} track={track}></Track>);
        });
    };
    const syncTracks = async () => {
        for (var i = 0; i < tracks.length; i++) {
            var track = tracks[i];
            if (i % 10 === 0 || i === tracks.length - 1) {
                await Synchronizer.syncTrack(track);
                setTracks(() => {return tracks.slice();});
            } else {
                Synchronizer.syncTrack(track);
            }
        }
    };
    return (<div>
                <button onClick={() => syncTracks()}>Sync tracks</button>
                <div>
                    {createTracks()}
                </div>
            </div>);
};

export default TracksList;