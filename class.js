const path = require('path')
let log = require('./Functions/esiJS-Utils/log')
const fs = require('fs')
/**
 * 
 * @param {object} - The Constructor. Valid arguments are `logging`, for enabling and disabling logging, and `token`, for passing in a token (which will be saved in the config).
 */
let esiJS = class {
    constructor({
        logging = true,
        token = ''
    }) {
        /**
         * Checks for a config file in 'projectPath'. If it exists, it checks if it can read and write to the file. If not, it creates one.
         */
        if (!logging) {
            log = () => {}
        }
        const projectConfig = path.join(__dirname, '../../esi.json')
        const projectPath = path.join(__dirname, `../../`)
        // Check for a ESI config file in the project directory
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
                    fs.writeFileSync(projectConfig, JSON.stringify(require('./esi.json'), null, 2))
                    log(`Sucessfully created config file in ${projectPath}!`, 'INFO')
                } catch (e) {
                    throw throwError(`There was a error while attempting to create the config file! Error: \n${e}`)
                }
                return false
            }

        } catch (e) {
            return
        }
        log(`I can read and write to the config file!`, 'INFO')
        if (token) {
            this.util.setSettings({
                authToken: token
            })
        }
    }
    alliance = require('./Functions/alliance')
    character = require('./Functions/character')
    contracts = require('./Functions/contracts')
    corporation = require('./Functions/corporation')
    dogma = require('./Functions/dogma')
    fw = require('./Functions/factionWarfare')
    incursions = require('./Functions/incursions')
    industry = require('./Functions/industry')
    insurance = require('./Functions/insurance')
    killmails = require('./Functions/killMails')
    loyalty = require('./Functions/loyalty')
    market = require('./Functions/market')
    opportunities = require('./Functions/opportunities')
    pi = require('./Functions/planetaryInteraction')
    routes = require('./Functions/routes')
    search = require('./Functions/search')
    sov = require('./Functions/sovereignty')
    status = require('./Functions/status')
    universe = require('./Functions/universe')
    ui = require('./Functions/userinterface')
    util = require('./Functions/utility')
    wars = require('./Functions/wars')
}
module.exports = esiJS