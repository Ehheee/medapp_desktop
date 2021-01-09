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
Server.checkYoutube = async (channelId) => {
    return await sendRequest("/external/youtube/check/" + channelId);
};
Server.saveYoutube = async () => {
    return await sendRequest("/external/youtube/save");
};
Server.getYoutubeTracks = async () => {
    return await sendRequest("/music/byDevice/youtube");
};
Server.getDuplicatesForTrack = async (trackId, threshold) => {
    return await sendRequest("/music/duplicates/" + trackId);
};
Server.getGeneratedDuplicatesForTrack = async (trackId) => {
    return await sendRequest("/music/generatedDuplicates/" + trackId + "?threshold=" + threshold);
};
export default Server;