import Realm from 'realm';

const FolderSchema = {
    name: 'Folder',
    primaryKey: 'id',
    properties: {
        id: 'int',
        path: 'string',
        fileCount: 'int',
        lastChecked: 'date'
    }
};
const instanceSchema = {

};
const schemas = [FolderSchema];
const DataAccess = {
    saveFolder: (folder) => {
        Realm.open({schema:schemas})
            .then(realm => {
                if (folder.id) {
                    realm.write(() => folder);
                } else {
                    folder = realm.create("Folder", folder);
                }
            }).catch()
    },
    getFolders: () => {

    },
};