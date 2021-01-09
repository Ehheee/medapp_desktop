import React, {useState} from 'react';
import { render } from 'react-dom';
import Server from '../../../data/server';
import DuplicateRow from './DuplicateRow';

const TrackInfo = (props) => {
    const [threshold, setThreshold] = useState(5.5);
    const [generatedDuplicates, setGeneratedDuplicates] = useState([]);
    const getGeneratedDuplicates = async (trackId) => {
        var dups = await Server.getPotentialDuplicatesForTrack(trackId, threshold);
        setGeneratedDuplicates(() => {return dups});
    };
    const updateThreshold = (event) => {
        event.persist();
        setThreshold(() => {return event.target.value});
    };
    const renderDuplicates = () => {
        return generatedDuplicates.map((duplicate) => {
            return (<DuplicateRow score={duplicate.score} track={duplicate.mediaB}></DuplicateRow>);
        });
    };
    return (<div className='trackInfo' >
                <div>
                    <span style={{'display': 'inline-block', 'min-width': '7em'}}>Threshold: {threshold}</span>
                    <input  onChange={(event) => updateThreshold(event)} value={threshold} type="range" min="0" max="25" step="0.5"></input>
                    <button onClick={() => getGeneratedDuplicates(props.track.serverId)}>Get potential duplicates</button>
                    <div class="savedDuplicates">

                    </div>
                    {renderDuplicates()}
                </div>
                
            </div>);
};

export default TrackInfo;