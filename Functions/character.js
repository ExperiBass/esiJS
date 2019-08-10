const request = require('./Utility/request')
const inputValidation = require('./Utility/inputValidation')

module.exports = {
    affiliation (idArray) {
        inputValidation({ input: idArray, type: 'object', message: `The function 'character.affiliation' requires an array of ids!` })

        request({ subUrl: 'characters/affiliation', post: true, body: idArray })
    },
    corpHistory (characterId) {
        inputValidation({ input: characterId, type: 'number', message: `The function 'character.corpHistory' needs a character ID!` })

        request({ subUrl: `characters/${characterId}/corporationhistory` })
    },
    portrait (characterId) {
        inputValidation({ input: characterId, type: 'number', message: `The function 'character.portrait' needs a character ID!` })

        request({ subUrl: `characters/${characterId}/portrait` })
    },
    publicInfo (characterId) {
        inputValidation({ input: characterId, type: 'number', message: `The function 'character.corpHistory' needs a character ID!` })

        request({ subUrl: `characters/${characterId}/portrait` })
    }
}
