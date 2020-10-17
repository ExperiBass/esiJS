const request = require('./esiJS-Utils/request')
const inputValidation = require('./esiJS-Utils/inputValidation')
module.exports = {
    /**
     *
     */
    leaderboards: {
        /**
         * Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday
         * @returns {object} Character leaderboard of kills and victory points within faction warfare.
         */
        characters() {
            return request({
                subUrl: `fw/leaderboards/characters`
            })
        },
        /**
         *
         * @returns {object} Corporation leaderboard of kills and victory points within faction warfare.
         */
        corps() {
            return request({
                subUrl: `fw/leaderboards/corporations`
            })
        },
        /**
         * Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday.
         * @returns {object} All-time leaderboard of kills and victory points within faction warfare.
         */
        leaderboard() {
            return request({
                subUrl: `fw/leaderboards`
            })
        }
    },
    /**
     *
     */
    stats: {
        /**
         * Statistical overviews of factions involved in faction warfare
         * @returns {object} Per faction breakdown of faction warfare statistics.
         */
        stats() {
            return request({
                subUrl: `fw/stats`
            })
        },
        /**
         * Overview of a character involved in faction warfare.
         * @param {number} characterID
         * @requires esi-characters.read_fw_stats.v1
         * @returns Statistical overview of a character involved in faction warfare.
         */
        characterStats(characterID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'fw.stats.characterStats' requires a character ID!`
            })
            return request({
                subUrl: `characters/${characterID}/fw/stats`,
                needsAuth: true
            })
        },
        /**
         * Overview of a corporation involved in faction warfare.
         * @param {number} corporationID
         * @requires esi-corporations.read_fw_stats.v1
         * @returns Statistics about a corporation involved in faction warfare.
         */
        corporationStats(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'fw.stats.corporationStats' requires a corporation ID!`
            })
            return request({
                subUrl: `corporations/${corporationID}/fw/stats`,
                needsAuth: true
            })
        }
    },
    /**
     * An overview of the current ownership of faction warfare solar systems.
     * @returns {object}
     */
    systems() {
        return request({
            subUrl: `fw/systems`
        })
    },
    /**
     * Data about which NPC factions are at war.
     * @returns {object}
     */
    wars() {
        return request({
            subUrl: `fw/wars`
        })
    }
}