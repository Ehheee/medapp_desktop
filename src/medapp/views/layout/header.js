import React from 'react';

const headerButtons = ['Music', 'Photos'];

var Header = (props) => {
    const renderButtons = () => {
        return props.buttons.map(b => {
            console.log(b);
            return <button className='headerButton' onClick={() => props.buttonClick(b)}>{b.name}</button>
        });
    };
    return (<div className='header'>{renderButtons()}</div>);
};

export default Header;