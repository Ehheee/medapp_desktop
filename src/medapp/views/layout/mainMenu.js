import React, {useState} from 'react';

const MainMenu = (props) => {
    const [activeButton, setActiveButton] = useState();
    const buttonClick = (v, k) => {
        props.buttonClick(v,k);
        setActiveButton(k);
    };
    const renderItems = () => {
        return Object.keys(props.structure).map((k) => {
            if (props.structure[k].component) {
                var v = props.structure[k];
                console.log(v,k);
                return (<button className={'mainMenuItem ' + (activeButton === k ? 'active': '')} onClick={() => buttonClick(v, k)} type='button'>{k}</button>);
            }
            return;
        });
    };
    return (<div className='mainMenu'>
                {renderItems()}
            </div>);
};

export default MainMenu;