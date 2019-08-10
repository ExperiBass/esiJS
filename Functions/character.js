const request = require('./Utility/request')
const inputValidation = require('./Utility/inputValidation')

module.exports = {
    affiliation (idArray) {
        try {
            inputValidation({ input: idArray, type: 'object', message: `The function 'character.affiliation' requires an array of ids!` })
        } catch (error) {
            throw Error(error)
        }
        request({ subUrl: 'characters/affiliation', post: true, body: idArray })
    },
    corpHistory (characterId) {
        try {
            inputValidation({ input: characterId, type: 'number', message: `The function 'character.corpHistory' needs a character ID!` })
        } catch (error) {
            throw Error(error)
        }
        request({ subUrl: `characters/${characterId}/corporationhistory` })
    },
    portrait (characterId) {
        try {
            inputValidation({ input: characterId, type: 'number', message: `The function 'character.portrait' needs a character ID!` })
        } catch (error) {
            throw Error(error)
        }
        request({ subUrl: `characters/${characterId}/portrait` })
    },
    publicInfo (characterId) {
        try {
            inputValidation({ input: characterId, type: 'number', message: `The function 'character.corpHistory' needs a character ID!` })
        } catch (error) {
            throw Error(error)
        }
        request({ subUrl: `characters/${characterId}/portrait` })
    }
}
