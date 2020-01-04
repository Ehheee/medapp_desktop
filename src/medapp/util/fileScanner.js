import DataAccess from '../data/dataAccess';

var jsmediatags = require('jsmediatags');
var glob = require('glob');


const extensionMap = {
    'Music': '{mp3,flac,wav}',
    'Photos': ''
};

const FileScanner =  {};
FileScanner.scanFolder = (dir, type, cb) => {
    glob(dir + '/**/*.' + extensionMap[type], cb);
};
FileScanner.onMediaTagSuccess = (file, cb, tag) => {
    var track = {};
    track.artist = tag.tags.artist;
    track.title = tag.tags.title;
    var instance = {path: file, type: 'Music'};
    DataAccess.saveTrack(track, [instance], cb && cb());
};
FileScanner.processMusicFiles = (cb, err, files) => {
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        jsmediatags.read(file, {
            onSuccess: FileScanner.onMediaTagSuccess.bind(this, file, i === files.length -1 && cb),
            onError: function(error) {
              console.log(':(', error.type, error.info);
            }
        });
    }
};
FileScanner.scanFiles = (dir, type, cb) => {
    FileScanner.scanFolder(dir, type, FileScanner.processMusicFiles.bind(this, cb));
};
export default FileScanner;