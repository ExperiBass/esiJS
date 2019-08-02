module.exports = sleep
/**
 * Pause execution of code for a specified amount of time.
 * @exports sleep
 * @async
 * @param millis {number} The time to delay (in milliseconds)
 */
async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}