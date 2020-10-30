module.exports = log

let chalk = require('chalk')

/**
 * @private
 * @param {string} message The log message.
 * @param {string} type Either 'INFO', 'WARN', or 'WARNING'.
 */
function log(message, type = 'info') {
    if (message) {
        switch (type.toLowerCase()) {
            case 'info': {
                console.log(`${chalk.green(`[esiJS:${type.toUpperCase()}]:`)} ${message}`)
                break
            }
            case 'warn':
            case 'warning': {
                console.log(`${chalk.yellow(`[esiJS:${type.toUpperCase()}]:`)} ${message}`)
                break
            }
            default: {
                return
            }
        }
    }
}