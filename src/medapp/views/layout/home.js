import React, {useState} from 'react';
import Header from './header';
import {Tab, MusicTab, PhotosTab} from './tabs';
import {MusicFolders, PhotoFolders} from '../components/folder/FoldersViewTypes';

const structure = {
    Music: {
        component: MusicTab,
        Tracks: {
            component: 'Tracks'
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
const topButtons = [
    {
        name: 'Music',
        subMenu: [
            {
                name: 'Tracks'
            }, {
                name: 'Folders',
                component: 'MusicFolders'
            }
        ]
    }, {
        name: 'Photos',
        subMenu: [
            {
                name: 'List'
            }, {
                name: 'Folders',
                component: 'PhotoFolders'
            }
        ]
    }
];
const Home = (props) => {
    const [content, setContent] = useState();
    const selectTab = (tabName, tabContent) => {
        setContent(tabName);
    };
    var SubContent = content ? structure[content].component : Tab;
    return (<div className="mainGrid borderThinSolid">
                <Header structure={structure} buttonClick={selectTab}></Header>
                {content && <SubContent name={content} structure={structure[content]}></SubContent>}
            <div className='footer'>footer</div>
            </div>
    );
}
export default Home;