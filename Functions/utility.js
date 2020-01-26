const path = require('path')
const fs = require('fs')
//const axios = require('axios')
const throwError = require('./esiJS-Utils/throwError')
const log = require('./esiJS-Utils/log')
const localConfig = path.join(__dirname, `../esi.json`)
const projectConfig = path.join(__dirname, '../../../esi.json')


function checkForConfig() {

    // Check for a ESI config file in the project directory
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
                    log(`Couldn't write to 'esi.json', reverting to default configuration`, 'INFO')
                    return false
                }
            } catch (e) {
                log(`Couldn't read 'esi.json', reverting to default configuration`, 'INFO')
                return false
            }

        } else {
            // If the file doesn't exist...
            log(`The config file doesn't exist! Reverting to default configuration and attempting to write to ${projectConfig}`, 'INFO')
            try {
                // ...attempt to create it
                fs.writeFileSync(projectConfig, JSON.stringify(require('../esi.json'), null, 2))
                log(`Sucessfully created config file!`, 'INFO')
            } catch (e) {
                throw throwError(`There was a error while attempting to create the config file! Error: \n${e}`)
            }
            return false
        }

    } catch (e) {
        return false
    }
    log(`Sucessfully read the config file at ${projectConfig}!`, 'INFO')
    return true
}

module.exports = {
    /**
     * Gets the settings for esiJS.
     * @returns {JSON} A JSON object with the settings.
     */
    getSettings() {
        let settings;

        if (checkForConfig()) {
            settings = fs.readFileSync(projectConfig, 'utf8')
            return JSON.parse(settings)
        }
        settings = fs.readFileSync(localConfig, 'utf8')
        return JSON.parse(settings)
    },
    /**
     * Sets the settings for esiJS.
     * @param {string} route Any of the valid routes through ESI.
     * @param {string} dataSource Tranquilty or Singularity.
     * @returns {Boolean} True if it was able to sucessfully write, false otherwise.
     */
    setSettings({
        route,
        dataSource,
        authToken,
        language,
        programName
    }) {
        if (checkForConfig()) {
            let server = 'esi.evetech.net'
            let routes = ['latest', 'v1', 'legacy', 'dev']
            let dataSources = ['tranquility', 'singularity']
            let currentSettings = this.getSettings()

            // Check if settings are already set, and dont change if not neededx
            route = route || currentSettings.route
            dataSource = dataSource || currentSettings.dataSource
            authToken = authToken || currentSettings.authToken
            language = language || currentSettings.language
            programName = programName || currentSettings.programName


            if (!route || !routes.includes(route) || !dataSource || !dataSources.includes(dataSource)) {
                throw throwError(`setSettings needs first arg to be one of these: ${routes}, and second arg to be one of these: ${dataSources}`)
            }
            route = `https://${server}/${route}/`
            try {
                fs.writeFileSync(projectConfig, JSON.stringify({
                    programName,
                    route,
                    dataSource,
                    authToken,
                    language
                }, null, 2))
                log(`Sucessfully updated config!`, 'INFO')
            } catch (e) {
                throw throwError(`Couldn't write config file! Error:\n${e}`)
            }
            return true
        }
        log(`There is no project config, calling 'getSettings()' to create config file...`, 'INFO')
        return false
    },
    /**
     * Pause execution of code for a specified amount of time.
     * @exports sleep
     * @async
     * @param millis {number} The time to delay (in milliseconds)
     * @returns {void}
     */
    async sleep(millis) {
        return new Promise(resolve => setTimeout(resolve, millis))
    },
    /*
        /**
         * Wrapper for Axios.all, resolves requests in bulk.
         * @param  {...any} requests Requests to resolve.
         * @async
         * @returns Resolved requests.
         *
        async all(...requests) {
            axios.all(requests)
            .then(axios.spread(...returns => {
                return returns
            }))
            .catch(e => {

            })
        }*/
}