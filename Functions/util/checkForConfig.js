const {projectPath, projectConfig, localConfig} = require('./constants')
const fs = require('fs')
let log = require('./log')
/**
 * @private
 * @param {boolean} logging
 */
module.exports = function checkForConfig(logging) {
    // Check for a ESI config file in the project directory
    if (!logging) {
        log = () => {}
    }
    try {
        let fileExists = fs.existsSync(projectConfig)

        // If the file exists...
        if (fileExists) {
            // ...see if we can read it...
            try {
                fs.accessSync(projectConfig, fs.constants.R_OK)

                // ...then see if we can write into it
                try {
                    fs.accessSync(projectConfig, fs.constants.W_OK)
                } catch (e) {
                    log(`Couldn't write to 'esi.json', reverting to default configuration`, 'WARNING')
                    return false
                }
            } catch (e) {
                log(`Couldn't read config file, reverting to default configuration`, 'WARNING')
                return false
            }

        } else {
            // If the file doesn't exist...
            log(`The config file doesn't exist! Reverting to default configuration and attempting to write to "${projectConfig}"...`, 'INFO')
            try {
                // ...attempt to create it
                fs.writeFileSync(projectConfig, JSON.stringify(require(localConfig), null, 2))
                log(`Sucessfully created config file in ${projectPath}!`, 'INFO')
            } catch (e) {
                throw throwError(`There was a error while attempting to create the config file! Error: \n${e}`)
            }
            return false
        }

    } catch (e) {
        return false
    }
    log(`I can read the config file!`, 'INFO')
    return true
}