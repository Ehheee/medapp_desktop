const fs = require('fs');
const localSettingsFile = require('os').homedir() + '\\medapp.json';
var settings = {};
if (fs.existsSync(localSettingsFile)){
    console.log(fs.readFileSync(localSettingsFile, 'UTF-8'));
    settings = JSON.parse(fs.readFileSync(localSettingsFile));
    console.log(settings);
}
const saveSettings = (key, value) => {
    settings[key] = value;
    fs.writeFileSync(localSettingsFile, JSON.stringify(settings));
    console.log(settings);
};
export {settings, saveSettings};