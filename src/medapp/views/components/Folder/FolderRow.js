import React, {useState} from 'react';
import FileScanner from '../../../util/fileScanner';

const FolderRow = (props) => {
    return (<div className='flexListItem'>
                <span className='flexListItemLeft'>{props.folder}</span>
                <button  type='button'>Scan</button>
                <button  type='button' onClick={() => props.onRemove(props.folder)}>Remove</button>
            </div>);
};
export default FolderRow;