import React, {useState, useEffect} from 'react';
import Home from './medapp/views/layout/home';
import {settings, saveSettings} from './medapp/util/conf'
import './App.css';

function App() {
  const [deviceName, setDeviceName] = useState();
  if (settings && settings.deviceName){
    return (
        <Home></Home>
    );
  } else {
    return (<div>
              <label htmlFor='deviceNameInput'>Enter device name: </label>
              <input id='deviceNameInput' onChange={(e) => setDeviceName(e.target.value)}></input>
              <button type='button' onClick={() => {saveSettings('deviceName', deviceName); window.location.reload()}}>Save</button>
            </div>);
  }
}

export default App;