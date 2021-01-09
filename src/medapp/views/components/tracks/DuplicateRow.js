import React, {useState, useEffect} from 'react';

const DuplicateRow = (props) => {
    return (<div className='btn w70 flexTableRow flexListItemLeft'>
                <div className="musicTitle">{props.track.artist}</div>
                <div className="musicTitle flexListItemLeft">{props.track.title}</div>
                <div>{"Score: " + props.score}</div>
                <button>Confirm duplicate</button>
            </div>);
};

export default DuplicateRow;