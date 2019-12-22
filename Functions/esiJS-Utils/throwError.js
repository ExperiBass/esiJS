module.exports = errorHandler

function errorHandler(msg, code) {
    let error = new Error(msg)
    error.code = code ? code : 'NO_CODE_DEFINED'
    return error
}