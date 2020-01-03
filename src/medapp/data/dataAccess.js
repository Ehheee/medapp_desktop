var db;
var folderStore;
var request = indexedDB.open('medappDB', 1);
request.onupgradeneeded = (event) => {
    var scopeDb = event.target.result;
    folderStore = scopeDb.createObjectStore('folders', {keyPath: 'id', autoIncrement: true});
    folderStore.createIndex('path', 'path', {unique: true});
    folderStore.createIndex('type', 'type');
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
DataAccess.getFolders = (type, cb) => {
    var objectStore = DataAccess.getStore('folders');
    var index = objectStore.index('type');
    var folders = [];
    index.openCursor(IDBKeyRange.only(type)).onsuccess = (event) => {
        var cursor = event.target.result;
        if (cursor) {
            folders.push(cursor.value);
            cursor.continue();
        } else {
            cb(folders);
        }
    };
};
export default DataAccess;