import DataAccess from './dataAccess';
import Server from './server';

var Synchronizer = {};
Synchronizer.syncTrack = async (track) => {
    var localId = JSON.parse(JSON.stringify(track.id));
    delete track.id;
    if (track.serverId) {
        track.id = track.serverId;
    }
    var resp = await Server.saveMusicTrack(track);
    var instances = await DataAccess.getInstanceByTrack(localId);
    track.serverId = resp.id;
    track.id = localId;
    track.synced = Date.now();
    DataAccess.saveTrack(track);
    return track;
};

export default Synchronizer;