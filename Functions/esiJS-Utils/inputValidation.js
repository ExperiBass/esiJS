function inputValidation ({ input, type, message, options, optional = false }) {
    
    let throwError = require('./throwError')

    // If is optional and input is undefined, no need to validate
    if (optional && input === undefined) {
        return
    }

    // Do not check for !input or you are making that you won't accept falsy values such as empty '' or id = 0
    if (input === undefined) {
       throw throwError(message, `INPUT_UNDEFINED`)
    }
    if (typeof input !== type) {
        throw throwError(message, `INPUT_NOT_EQUAL_TO_REQUIRED_TYPE`)
    }
    // If options is provided, check that input is included
    if (options && !options.includes(input)) {
        throw throwError(message, `GIVEN_OPTION_NOT_VALID_OPTION`)
    }
}

module.exports = inputValidation