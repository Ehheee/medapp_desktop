import React, {useState} from 'react';

var Header = (props) => {
    const [activeButton, setActiveButton] = useState();
    const buttonClick = (k, v) => {
        props.buttonClick(k,v);
        setActiveButton(k);
    };
    const renderButtons = () => {
        return Object.keys(props.structure).map((k) => {
            var v = props.structure[k];
            console.log(v, k);
            return <button className={'headerButton ' + (activeButton === k ? 'active': '')} onClick={(e) => buttonClick(k,v,e)}>{k}</button>
        });
    };
    return (<div className='header'>{renderButtons()}</div>);
};

export default Header;