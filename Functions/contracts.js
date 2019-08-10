const request = require('./Utility/request')
const inputValidation = require('./Utility/inputValidation')

module.exports = {
    public: {
        bids (contractID, pageNumber = 1) {
            inputValidation({ input: contractID, type: 'number', message: `The function 'contracts.public.bids' requires a contract ID!` })
            inputValidation({ input: pageNumber, type: 'number', message: `The input pageNumber for 'contracts.public.bids' needs to be a number` })

            return request({ subUrl: `contracts/public/bids/${contractID}`, query: { page: pageNumber } })
        },
        contracts (regionID, pageNumber = 1) {
            inputValidation({ input: regionID, type: 'number', message: `The function 'contracts.public.contracts' requires a region ID!` })
            inputValidation({ input: pageNumber, type: 'number', message: `The input pageNumber for 'contracts.public.contracts' needs to be a number` })

            return request({
                subUrl: `contracts/public/${regionID}`,
                query: { page: pageNumber }
            })
        },
        items (contractID, pageNumber = 1) {
            inputValidation({ input: contractID, type: 'number', message: `The function 'contracts.public.items' requires a contract ID!` })
            inputValidation({ input: pageNumber, type: 'number', message: `The input pageNumber for 'contracts.public.items' needs to be a number` })

            return request({
                subUrl: `contracts/public/items/${contractID}`,
                query: { page: pageNumber }
            })
        },
    }
}
