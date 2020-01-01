import React from 'react';

const MainMenu = (props) => {
    const renderItems = () => {
        return Object.keys(props.structure).map((k) => {
            if (props.structure[k].component) {
                var v = props.structure[k];
                console.log(v,k);
                return (<button className='mainMenuItem' onClick={() => props.buttonClick(v, k)} type='button'>{k}</button>);
            }
        });
    };
    return (<div className='mainMenu'>
                {renderItems()}
            </div>);
};

export default MainMenu;