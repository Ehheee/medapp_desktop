import React from 'react';
import FoldersView from './FoldersView';

const MusicFolders = (props) => {
    return (<FoldersView name={props.name}></FoldersView>);
};
const PhotoFolders = (props) => {
    return (<FoldersView name={props.name}></FoldersView>);
};
export {MusicFolders, PhotoFolders};