const request = require('./Utility/request')
const inputValidation = require('./Utility/inputValidation')

module.exports = {
    attrInfo (attribute) {
        try {
            inputValidation({ input: attribute, type: 'string', message: `The function 'dogma.attrInfo' requires an attribute!` })
        } catch (error) {
            throw Error(error)
        }
        return request({ subUrl: `dogma/attributes/${attribute}` })
    },
    attrs () {
        return request({ subUrl: `dogma/attributes` })
    },
    dynItemInfo (itemID, typeID) {
        try {
            inputValidation({ input: itemID, type: 'string', message: `The function 'dogma.attrs' requires an attribute!` })
            // TODO: validate if TypeID is string or number.
            inputValidation({ input: typeID, type: 'string', message: `The function 'dogma.attrs' requires an typeID!` })
        } catch (error) {
            throw Error(error)
        }
        return request({ subUrl: `dogma/dynamic/items/${typeID}/${itemID}` })
    },
    effectInfo (dogma) {
        try {
            inputValidation({ input: dogma, type: 'string', message: `The function 'dogma.effectInfo' requires a dogma!` })
        } catch (error) {
            throw Error(error)
        }
        return request({ subUrl: `dogma/effects/${dogma}` })
    },
    effects () {
        return request({ subUrl: `dogma/effects` })
    }
}
