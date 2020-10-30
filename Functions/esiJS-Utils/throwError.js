module.exports = errorHandler

/**
 * @private
 * @param {string} msg 
 * @param {string} code 
 * @param {string} url 
 */
function errorHandler(msg, code, url) {
    let error = new Error(msg)
    url ? error.url = url : false
    error.code = code ? code : 'NO_CODE_DEFINED'
    error.captureStackTrace
    return error
}