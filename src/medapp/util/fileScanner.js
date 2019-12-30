var glob = require('glob');

const FileScanner =  {
    scanFolder: (dir) => {
        glob(dir + '/**', (er, files) => {
            console.log(files);
        });
    }
};
export default FileScanner;