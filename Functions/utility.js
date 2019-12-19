const path = require('path')
const localConfig = path.join(__dirname, `../esi.json`)
const fs = require('fs')
const config = '../../esi.json'

function checkForConfig() {

    // Check for a ESI config file in the project directory
    try {

        // If the file exists...
        let fileExists = fs.existsSync(config)
        if (fileExists) {

            // ...see if we can read it...
            try {
                fs.accessSync(config, fs.constants.R_OK)

                // ...then see if we can write into it
                try {
                    fs.accessSync(config, fs.constants.W_OK) 
                } catch(e) {
                    console.log(`Couldn't write to 'esi.json', reverting to default configuration`)
                    return false
                } 
            } catch(e) {
                console.log(`Couldn't read 'esi.json', reverting to default configuration`)
                return false
            }
        } else {
            console.log(`The config file doesn't exist! Reverting to default configuration and attempting to write to ${path.join(__dirname, config)}`)
            try {
                fs.writeFileSync(path.join(__dirname, config), JSON.stringify(require('../esi.json'), null, 2))
            } catch(e) {
                console.log(`There was a error while attempting to create the config file! Error: \n${e}`)
            }
            return false 
        }
        
    } catch(e) {
        
        return false
    }

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
            settings = fs.readFileSync(join, 'utf8')
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
    setSettings(route = 'latest', dataSource = 'tranquility') {
        if (checkForConfig()) {
            let server = 'esi.evetech.net'
            let routes = ['latest','v1','legacy','dev']
            let dataSources = ['tranquility','singularity']
        
            if (!route || !routes.includes(route) || !dataSource || !dataSources.includes(dataSource)) {
                throw Error(`setSettings needs first arg to be one of these: ${routes}, and second arg to be one of these: ${dataSources}`)
            }
            route = `https://${server}/${route}/`
            fs.writeFileSync(localConfig, JSON.stringify( { route, dataSource }, null, 2) )
            return true
        }      
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
    }
}