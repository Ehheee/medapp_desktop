import React, {useState} from 'react';
import Header from './header';
import MainMenu from './mainMenu';
import {FoldersView} from '../components/FoldersView';

const topButtons = [
    {
        name: 'Music',
        subMenu: [
            {
                name: 'Tracks'
            }, {
                name: 'Folders',
                component: 'FoldersView'
            }
        ]
    }, {
        name: 'Photos',
        subMenu: [
            {
                name: 'List'
            }, {
                name: 'Folders'
            }
        ]
    }
];
const compMap = {
    'FoldersView': FoldersView
};
const Home = (props) => {
    const [currentMainMenu, setCurrentMainMenu] = useState(topButtons[0].subMenu);
    const [TagName, setTagName] = useState('FoldersView');
    const showMainMenu = (b) => {
        setCurrentMainMenu(b.subMenu)
    };
    const showContent = (menuItem) => {
        console.log(menuItem.component);
        console.log(FoldersView);
        console.log(Header);
        console.log(TagName);
        console.log(currentMainMenu);
        setTagName(menuItem.component);
    };
    var Content = compMap[TagName]|| FoldersView;
    return (<div className="mainGrid borderThinSolid">
                <Header buttons={topButtons} buttonClick={showMainMenu}></Header>
                <MainMenu items={currentMainMenu} buttonClick={showContent}></MainMenu>
                <div className='content'><Content></Content></div>
            <div className='footer'>footer</div>
            </div>
    );
}
export default Home;