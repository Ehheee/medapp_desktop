import React, {useState, useRef} from 'react';
import Header from './header';
import {MusicTab, PhotosTab} from './tabs';
import {MusicFolders, PhotoFolders} from '../components/folder/FoldersViewTypes';
import MusicPage from '../components/tracks/MusicPage';

const structure = {
    Music: {
        component: MusicTab,
        Tracks: {
            component: MusicPage
        },
        Folders: {
            component: MusicFolders
        }
    },
    Photos: {
        component: PhotosTab,
        List: {
            component: 'PhotosList'
        },
        Folders: {
            component: PhotoFolders
        }
    }
};
const Home = (props) => {
    const [content, setContent] = useState();
    const selectTab = (tabName, tabContent) => {
        setContent(tabName);
    };
    const renderContents = () => {
        return Object.keys(structure).map((k) => {
            var SubContent = structure[k].component;
            return <SubContent hidden={!content || content !== k} key={k} name={k} structure={structure[k]}></SubContent>
        });
    };
    return (<div className="mainGrid borderThinSolidRound">
                <Header structure={structure} buttonClick={selectTab}></Header>
                {renderContents()}
            <div className='footer'>footer</div>
            </div>
    );
}
export default Home;