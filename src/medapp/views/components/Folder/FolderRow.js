import React, {useState} from 'react';
import FileScanner from '../../../util/fileScanner';
import DataAccess from '../../../data/dataAccess';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

const FolderRow = (props) => {
    const [folder, setFolder] = useState(props.folder);
    const [scanning, setScanning] = useState(false);
    const onScan = () => {
        FileScanner.scanFolder(folder.path, folder.type, (err, files) => {
            var f = {...folder, fileCount: files.length};
            DataAccess.saveFolder(f);
            setFolder(f);
        });
    };
    const scanFiles = () => {
        setScanning(true);
        FileScanner.scanFiles(folder.path, folder.type, () => {
            setScanning(false);
        });
    };
    const createScanInfo = () => {
        if (folder.fileCount) {
            return (<div>
                        {scanning && <FontAwesomeIcon size='sm' icon={faSync} spin color='#b90000'/>}
                        <span >{folder.fileCount + " files"}</span>
                        <button disabled={scanning && 'disabled'} type='button' onClick={scanFiles}>Scan files</button>
                    </div>
            );
        }
    };
    return (<div className='flexListRow'>
                <span className='flexListItemLeft'>{folder.path}</span>
                {createScanInfo()}
                <button  type='button' onClick={onScan}>Check files</button>
                <button  type='button' onClick={() => props.onRemove(folder)}>Remove</button>
            </div>);
};
export default FolderRow;