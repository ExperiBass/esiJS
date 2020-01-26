module.exports = log

function log(message, type = 'info') {
    if (message) {
        return console.log(`[esiJS:${type.toUpperCase()}]:  ${message}`)
    }
}