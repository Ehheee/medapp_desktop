import React from 'react';
import {MusicFolders, PhotoFolders} from '../components/folder/FoldersViewTypes';

const compMap = {
    'MusicFolder': MusicFolders,
    'PhotoFolders': PhotoFolders
};
const Content = (props) => {
    var SubContent = props.structure.component;
    return (<div className='contentElement'>
                <span>{props.name}</span>
                <SubContent name={props.name}></SubContent>
            </div>);
};

export default Content;