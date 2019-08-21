const request = require('./Utility/request')
const inputValidation = require('./Utility/inputValidation')

module.exports = {
    public: {
        /**
         * Lists bids on a public auction contract.
         * @exports bids
         * @async
         * @param contractID {number} The auction contract to get the bids of.
         * @param pageNum {number} The page of bids to get. Defaults to `1`.
         * @returns {object} The bids on the auction.
         */
        bids (contractID, pageNumber = 1) {
            inputValidation({ input: contractID, type: 'number', message: `The function 'contracts.public.bids' requires a contract ID!` })
            inputValidation({ input: pageNumber, type: 'number', message: `The input pageNumber for 'contracts.public.bids' needs to be a number` })

            return request({ subUrl: `contracts/public/bids/${contractID}`, query: { page: pageNumber } })
        },
        /**
         * Returns a paginated list of all public contracts in the given region.
         * @exports contracts
         * @async
         * @param regionID {number} The region to get the contracts from.
         * @param pageNum {number} The page of contracts to get. Defaults to `1`.
         * @returns {object} A paginated list of all public contracts in the given region.
        */
        contracts (regionID, pageNumber = 1) {
            inputValidation({ input: regionID, type: 'number', message: `The function 'contracts.public.contracts' requires a region ID!` })
            inputValidation({ input: pageNumber, type: 'number', message: `The input pageNumber for 'contracts.public.contracts' needs to be a number` })

            return request({
                subUrl: `contracts/public/${regionID}`,
                query: { page: pageNumber }
            })
        },
        /**
         * Lists items of a public contract.
         * @exports items
         * @async
         * @param contractID {number} The contract to get items from.
         * @param pageNum {number} The page of contracts to get. Defaults to `1`.
         * @returns {array} A array of items.
         */
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