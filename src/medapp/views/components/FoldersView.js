import React, {useState} from 'react';

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
    const createFoldersList = () => {
        return folders.map(folder => {
            return <span>{folder}</span>
        });
    };
    return (<div>
                <label className='btn' for='folderInput'>Add folder</label>
                <input className='noDisplay' id='folderInput' type='file' nwdirectory='true' onChange={addFolder}></input>
                <div>
                    {createFoldersList()}
                </div>
            </div>);
};

export {FoldersView};