import React, {useState, useEffect} from 'react';
import FolderRow from './FolderRow';

const fs = require('fs');
const localSettingsFile = require('os').homedir() + '\\medapp.json';

const FoldersView = (props) => {
    const [folders, setFolders] = useState([]);
    const addFolder = (evt) => {
        var newFolders;
        if (evt.target.files) {
            newFolders = folders.concat([...evt.target.files].map(file => {
                return file.path;
            }));
        }
        evt.target.type = '';
        evt.target.type = 'file';
        setFolders(newFolders);
    };
    const removeFolder = (dir) => {
        var newFolders = folders.slice();
        newFolders.splice(newFolders.indexOf(dir), 1);
        setFolders(newFolders);
    };
    useEffect(() => {
        //save folders after change
    }, [folders]);
    useEffect(() => {
        if (!fs.existsSync(localSettingsFile)) {
            fs.writeFileSync(localSettingsFile, "");
        }
    }, []);
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

export {FoldersView};