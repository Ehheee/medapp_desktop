import {settings} from '../util/conf';
var Server = {};
var serverLocation = settings.serverLocation;
var sendRequest = async (path, options) => {
    const resp = await fetch(serverLocation + path, options);
    var o = await resp.json();
    return o.result;
};
var sendPost = async (path, data) => {
    return await sendRequest(path, {
        method: "POST",
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};
Server.saveMusicTrack = async (track) => {
    return await sendPost("/music", track);
};
export default Server;