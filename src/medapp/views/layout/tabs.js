import React, {useState, useRef, useEffect} from 'react';
import MainMenu from './mainMenu';
import Content from './content';

const Tab = (props) => {
    const [content, setContent] = useState();
    const selectContent = (content, contentName) => {
        setContent(contentName);
    };
    return (<div className={'tab ' + (props.hidden ? 'hidden' : '')}>
                <MainMenu structure={props.structure} buttonClick={selectContent}></MainMenu>
                <div className='contentContainer borderThinDash'>
                    {content && <Content structure={props.structure[content]} name={props.name}></Content>}
                </div>
            </div>);
};
const MusicTab = (props) => {
    return <Tab {...props} ></Tab>;
};
const PhotosTab = (props) => {
    return <Tab {...props} ></Tab>;
};
export {Tab, MusicTab, PhotosTab};