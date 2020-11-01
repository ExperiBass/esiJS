const path = require('path')
const fs = require('fs')
const throwError = require('./esiJS-Utils/throwError')
let log = require('./esiJS-Utils/log')
const localConfig = path.join(__dirname, `../esi.json`)
const projectConfig = path.join(__dirname, '../../../esi.json')
const projectPath = path.join(__dirname, `../../../`)

/**
 * @private
 * @param {boolean} logging
 */
function checkForConfig(logging) {
    // Check for a ESI config file in the project directory
    if (logging = true) {
        log = () => {}
    }
    try {
        log(`Checking for a config file in ${projectPath}...`, 'INFO')
        let fileExists = fs.existsSync(projectConfig)

        // If the file exists...
        if (fileExists) {

            // ...see if we can read it...
            try {
                log(`Config file exists! Checking if I can read it...`, 'INFO')
                fs.accessSync(projectConfig, fs.constants.R_OK)

                // ...then see if we can write into it
                try {
                    log(`I can read it! Checking if I can write into it...`, 'INFO')
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
            log(`The config file doesn't exist! Reverting to default configuration and attempting to write to ${projectConfig}...`, 'INFO')
            try {
                // ...attempt to create it
                fs.writeFileSync(projectConfig, JSON.stringify(require('../esi.json'), null, 2))
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
module.exports = {
    /**
     * Gets the settings for esiJS.
     * @returns {JSON} A JSON object with the settings.
     */
    getSettings() {
        let settings;

        if (checkForConfig(true)) {
            log(`Reading project config file in ${projectPath}...`, 'INFO')
            settings = fs.readFileSync(projectConfig, 'utf8')
            return JSON.parse(settings)
        } else {
            log(`No project config file! Attempting to revert to default configuration...`, 'WARN')
            settings = fs.readFileSync(localConfig, 'utf8')
        }
        return JSON.parse(settings)
    },
    /**
     * Sets the settings for esiJS.
     * @param {string} route Any of the valid routes through ESI. Defaults to `latest`.
     * @param {string} authToken A valid auth token.
     * @param {string} language A valid language code. Defaults to `en/us`.
     * @param {string} projectName The name of your project, used by esiJS to pass in as a header. If not defined, defaults to `esiJS-v${version}`.
     * @returns {Boolean} `true` if it was able to sucessfully write. Otherwise, a error.
     */
    setSettings({
        route = "latest",
        authToken,
        language = "en/us",
        projectName
    }) {
        if (checkForConfig()) {
            const server = 'esi.evetech.net'
            let routes = ['latest', 'v1', 'legacy', 'dev']
            let currentSettings = this.getSettings()

            // Check if settings are already set, and dont change if not needed
            route = route || currentSettings.route
            authToken = authToken || currentSettings.authToken
            language = language || currentSettings.language
            projectName = projectName || currentSettings.projectName


            if (!route || !routes.includes(route)) {
                throw throwError(`setSettings needs its "route" argument to be one of these: ${routes}`)
            }
            route = `https://${server}/${route}/`
            try {
                fs.writeFileSync(projectConfig, JSON.stringify({
                    projectName: projectName,
                    link: route,
                    authToken,
                    language
                }, null, 2))
                log(`Sucessfully updated config!`, 'INFO')
            } catch (e) {
                throw throwError(`Couldn't write config file! Error:\n${e}`)
            }
            return true
        }
        throw throwError(`If you are seeing this error, 2 + 2 is not equal to 4 and your life is a lie.`, 'THIS_SHOULDNT_EVER_HAPPEN')
    },
    /**
     * Pause execution of code for a specified amount of time.

     * @param {number} millis The time to delay (in milliseconds)
     * @returns {Promise<function>}
     */
    async sleep(millis) {
        return new Promise(resolve => setTimeout(resolve, millis))
    }
}