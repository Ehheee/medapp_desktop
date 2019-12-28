import React from 'react';

const MainMenu = (props) => {
    const renderItems = () => {
        return props.items.map(item => {
            return (<button className='mainMenuItem' onClick={() => props.buttonClick(item)} type='button'>{item.name}</button>);
        });
    };
    return (<div className='mainMenu'>
                {renderItems()}
            </div>);
};

export default MainMenu;