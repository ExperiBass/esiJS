module.exports = {
    /**
     * Gets the settings for esiJS.
     * @returns {object} A JSON object with the settings.
     */
    getSettings() {
        let path = require('path')
        let join = path.join(__dirname, `../esi.json`)
        const fs = require('fs')
        let settings = fs.readFileSync(join,'Utf8')
        return JSON.parse(settings)
    },
    /**
     * Sets the settings for esiJS.
     * @param {string} link 
     * @param {string} dataSource 
     * @returns true
     */
    setSettings(link = 'latest', dataSource = 'tranquility') {
        const fs = require('fs')
        let path = require('path')
        let join = path.join(__dirname, '../../esi.json')
        let server = 'https://esi.evetech.net/'
        let path = 'latest v1 legacy dev'.split(' ')
        let DS = 'tranquility singularity'.split(' ')
    
        if (!link || !path.includes(link) || !dataSource || !DS.includes(dataSource)) {
            console.error(`setSettings needs its first arg to be one of these: ${path}, and its second arg to be one of these: ${DS}`)
            throw Error(`setSettings needs first arg to be one of these: ${path}, and second arg to be one of these: ${DS}`)
        }
    
        link = `${server}${link}/`
        fs.writeFileSync(join, JSON.stringify( { link, dataSource }, null, 2) )
        return true
    },
    /**
     * Pause execution of code for a specified amount of time.
     * @exports sleep
     * @async
     * @param millis {number} The time to delay (in milliseconds)
     */
    sleep(millis) {
        return new Promise(resolve => setTimeout(resolve, millis))
    }
}