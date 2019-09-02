const request = require('./esiJS-Utils/request')
const inputValidation = require('./esiJS-Utils/inputValidation')

module.exports = {
    /**
     * Search for entities that match a given sub-string.
     * @async
     * @param {string} search 
     * @param {string} category 
     * @param {boolean} strict 
     * @returns {object}
     */
    search (search, category, strict = false) {
        
        let categories = [
            'agent',
            'alliance',
            'character',
            'constellation',
            'corporation',
            'faction',
            'inventory_type',
            'region',
            'solar_system',
            'station'
        ]
        
        inputValidation({ input: search, type: 'number', message: `The function 'search.search' requires a search input!` })
        inputValidation({
            input: category,
            type: 'string',
            options: categories,
            message: `The function input category of 'search.search' must be one of the following: ${categories.join(', ')}!`
        })
        inputValidation({ input: strict, type: 'boolean', message: `The function input strict of 'search.search' must be false or true!` })

        return request({
            subUrl: `search`,
            query: {
                categories: category,
                search,
                strict
            }
        })
    }
}
