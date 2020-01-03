var jsmediatags = require('jsmediatags');
var glob = require('glob');


const extensionMap = {
    'Music': '{mp3,flac,wav}'
};

const FileScanner =  {};
FileScanner.scanFolder = (dir, type, cb) => {
    glob(dir + '/**/*.' + extensionMap[type], cb);
};
FileScanner.onMediaTagSuccess = (file, tag) => {
    var track = {};
    track.artist = tag.tags.artist;
    track.title = tag.tags.title;
    track.path = file;
};
FileScanner.scanFiles = (dir, type, cb) => {
    FileScanner.scanFolder(dir, type, (err, files) => {
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            jsmediatags.read(file, {
                onSuccess: FileScanner.onMediaTagSuccess.bind(this, file),
                onError: function(error) {
                  console.log(':(', error.type, error.info);
                }
              });
        }
    });
};
export default FileScanner;