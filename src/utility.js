const fs = require('fs')
const { buildError, checkForConfig, log, getSettings } = require('./util/util.js')
const {
    projectConfig,
    localConfig,
    server,
    routes
} = require('./util/constants.js')

module.exports = {
    /**
     * Gets the settings for esiJS.
     * @returns {JSON} A JSON object with the settings.
     */
    getSettings,
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
            let currentSettings = this.getSettings()

            // Check if settings are already set, and dont change if not needed
            route = route || currentSettings.route
            authToken = authToken || currentSettings.authToken
            language = language || currentSettings.language
            projectName = projectName || currentSettings.projectName


            if (!route || !routes.includes(route)) {
                throw buildError(`setSettings needs its "route" argument to be one of these: ${routes}`)
            }
            route = `https://${server}/${route}/`
            try {
                const newConfig = JSON.stringify({
                    projectName: projectName,
                    link: route,
                    authToken,
                    language
                }, null, 2)
                fs.writeFileSync(projectConfig, newConfig)
                log(`Sucessfully updated config!\nNew config:\n${newConfig}`, 'INFO')
            } catch (e) {
                throw buildError(`Couldn't write config file! Error:\n${e}`)
            }
            return true
        }
        throw buildError(`If you are seeing this error, 2 + 2 is not equal to 4 and your life is a lie.`, 'THIS_SHOULDNT_EVER_HAPPEN')
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