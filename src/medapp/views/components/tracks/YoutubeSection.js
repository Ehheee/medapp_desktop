import React, {useState} from 'react';
import Server from '../../../data/server';
import Track from './Track';

const YoutubeSection = () => {
    const [youtubeData, setYoutubeData] = useState();
    const checkYoutube = async (channelId) => {
        var data = Server.checkYoutube(channelId);
        setYoutubeData(() => {return data;});
    };
    const saveYoutube = async () => {
        Server.saveYoutube();
    };
    
    return (<div>
                <button onClick={() => checkYoutube('UCdO1k99A8dJEiAjNY_GvwIQ')}>Check Youtube</button>
                <button onClick={() => saveYoutube()}>Save Youtube</button>
                <div>{}</div>
    </div>);
};

export default YoutubeSection;