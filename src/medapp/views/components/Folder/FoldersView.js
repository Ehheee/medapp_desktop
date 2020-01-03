import React, {useState, useRef, useEffect} from 'react';
import FolderRow from './FolderRow';
import DataAccess from '../../../data/dataAccess';

//TODO implement remove
const FoldersView = (props) => {
    const [folders, setFolders] = useState([]);
    const firstRender = useRef(true);
    const addFolder = (name, evt) => {
        if (!evt.target.files) {
            return;
        }
        var newFolder = {path: evt.target.files[0].path, type: name};
        var newFolders = folders.slice();
        evt.target.type = '';
        evt.target.type = 'file';
        DataAccess.saveFolder(newFolder, (evt) => {
            newFolder.id = evt.target.result;
            newFolders.push(newFolder);
            setFolders(newFolders);});
        
    };
    const removeFolder = (dir) => {
        var newFolders = folders.slice();
        newFolders.splice(newFolders.indexOf(dir), 1);
        setFolders(newFolders);
    };
    useEffect(() => {
        DataAccess.getFolders(props.name, (result) => {
            setFolders(result);
        });
    }, []);
    const createFoldersList = () => {
        return folders.map(folder => {
            return <FolderRow onRemove={removeFolder} folder={folder}></FolderRow>
        });
    };
    return (<div>
                <label className='btn' htmlFor={props.name + 'folderInput'}>Add folder</label>
                <input className='noDisplay' id={props.name + 'folderInput'} type='file' nwdirectory='true' onChange={(evt) => {addFolder(props.name, evt)}}></input>
                <div>
                    {createFoldersList()}
                </div>
            </div>);
};

export default FoldersView;