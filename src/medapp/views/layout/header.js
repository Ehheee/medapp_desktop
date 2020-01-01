import React from 'react';

var Header = (props) => {
    const renderButtons = () => {
        return Object.keys(props.structure).map((k) => {
            var v = props.structure[k];
            console.log(v, k);
            return <button className='headerButton' onClick={() => props.buttonClick(k,v)}>{k}</button>
        });
    };
    return (<div className='header'>{renderButtons()}</div>);
};

export default Header;