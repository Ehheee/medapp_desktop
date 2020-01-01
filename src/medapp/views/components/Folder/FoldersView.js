import React, {useState, useRef, useEffect} from 'react';
import FolderRow from './FolderRow';
import {settings, saveSettings} from '../../../util/conf'


const FoldersView = (props) => {
    const [folders, setFolders] = useState([]);
    const firstRender = useRef(true);
    const addFolder = (evt) => {
        var newFolders;
        if (evt.target.files) {
            newFolders = folders.concat([...evt.target.files].map(file => {
                return file.path;
            }));
        }
        evt.target.type = '';
        evt.target.type = 'file';
        console.log(settings);
        setFolders(newFolders);
    };
    const removeFolder = (dir) => {
        var newFolders = folders.slice();
        newFolders.splice(newFolders.indexOf(dir), 1);
        setFolders(newFolders);
    };
    useEffect(() => {
        if (settings && settings.folders && settings.folders[props.name]) {
            setFolders(settings.folders[props.name]);
        } 
    }, [])
    useEffect(() => {
        if (!firstRender.current) {
            if (!settings.folders) {
                settings.folders = {};
            }
            settings.folders[props.name] = folders;
            saveSettings(settings);
        }
        firstRender.current =false;
    }, [folders]);
    const createFoldersList = () => {
        return folders.map(folder => {
            return <FolderRow onRemove={removeFolder} folder={folder}></FolderRow>
        });
    };
    return (<div>
                <label className='btn' htmlFor='folderInput'>Add folder</label>
                <input className='noDisplay' id='folderInput' type='file' nwdirectory='true' onChange={addFolder}></input>
                <div>
                    {createFoldersList()}
                </div>
            </div>);
};

export default FoldersView;