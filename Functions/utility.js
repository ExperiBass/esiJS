let path = require('path')
let join = path.join(__dirname, `../esi.json`)
const fs = require('fs')
const config = '../../esi.json'

function checkForConfig() {
    // Check for a ESI config file in the project directory
    try {
        fs.existsSync(config)
        try {
           fs.accessSync(config, fs.constants.W_OK | fs.constants.R_OK) 
        } catch(e) {
            console.log(`Couldn't read/write to 'esi.json', reverting to default configuration`)
            return false
        }
        
    } catch(e) {
        console.log(`Couldn't find 'esi.json', reverting to default configuration`)
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
        settings = fs.readFileSync(join, 'utf8')
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
            fs.writeFileSync(join, JSON.stringify( { route, dataSource }, null, 2) )
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