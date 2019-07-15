module.exports = sleep
/**
 * Pause execution of code for a specified amount of time.
 * @exports sleep
 * @async
 * @param millis The time to delay (in milliseconds)
 */
async function sleep(millis) {
    if (!millis || typeof millis !== 'number') {
      throw Error(`sleep needs miliseconds`)
    }
    return new Promise(resolve => setTimeout(resolve, millis));
}