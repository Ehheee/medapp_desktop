const fs = require('fs');
const localSettingsFile = require('os').homedir() + '\\medapp.json';
var settings = {};
if (fs.existsSync(localSettingsFile)){
    var settingsString = fs.readFileSync(localSettingsFile, 'UTF-8');
    console.log(settingsString);
    settings = JSON.parse(settingsString);
    console.log(settings);
}
const saveSettings = (settings) => {
    fs.writeFileSync(localSettingsFile, JSON.stringify(settings));
    console.log(settings);
};
export {settings, saveSettings};