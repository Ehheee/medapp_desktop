var db;
var request = indexedDB.open('medappDB', 1);
request.onupgradeneeded = (event) => {
    var scopeDb = event.target.result;
    var folderStore = scopeDb.createObjectStore('folders', {keyPath: 'id', autoIncrement: true});
    folderStore.createIndex('path', 'path', {unique: true});
    folderStore.createIndex('type', 'type');
    var instanceStore = scopeDb.createObjectStore('instances', {keyPath: 'id', autoIncrement: true});
    instanceStore.createIndex('path', 'path', {unique: true});
    instanceStore.createIndex('type', 'type');
    var trackStore = scopeDb.createObjectStore('tracks', {keyPath: 'id', autoIncrement: true});
};
request.onsuccess = (event) => {
    db = event.target.result;
};
var DataAccess = {};
DataAccess.getStore = (storeName, mode) => {
    return db.transaction(storeName, mode).objectStore(storeName);
}
DataAccess.saveFolder = (folder, cb) => {
    var objectStore = DataAccess.getStore('folders', 'readwrite');
    objectStore.put(folder).onsuccess = cb;
};
DataAccess.getCursorResults = (results, cb, event) => {
    var cursor = event.target.result;
    if (cursor) {
        results.push(cursor.value);
        cursor.continue();
    } else {
        cb(results);
    }
};
DataAccess.getFolders = (type, cb) => {
    var objectStore = DataAccess.getStore('folders');
    var index = objectStore.index('type');
    index.openCursor(IDBKeyRange.only(type)).onsuccess = DataAccess.getCursorResults.bind(this, [], cb);
};
DataAccess.getTracks = (cb) => {
    var transaction = db.transaction(['tracks', 'instances']);
    var trackStore = transaction.objectStore('tracks');
    var instanceIndex = transaction.objectStore('instances').index('type');
    var tracks = [];
    var instances = [];
    trackStore.openCursor().onsuccess = DataAccess.getCursorResults.bind(this, tracks, () => {
        instanceIndex.openCursor(IDBKeyRange.only('Music')).onsuccess = DataAccess.getCursorResults.bind(this,instances,() => {
            cb({tracks:tracks, instances:instances});
        });
    });
};
DataAccess.saveTrack = (track, instances, cb) => {
    var transaction = db.transaction(['tracks', 'instances'], 'readwrite');
    var trackStore = transaction.objectStore('tracks');
    var instanceStore = transaction.objectStore('instances');
    trackStore.put(track).onsuccess = (event) => {
        instances.forEach((instance, index) => {
            instance.trackId = event.target.result
            instanceStore.put(instance).onsuccess = (evt) => {
                instance.id = evt.target.result;
                if (index === instances.length - 1) {
                    cb && cb(track, instances);
                }
            };
        });
    };
};

export default DataAccess;