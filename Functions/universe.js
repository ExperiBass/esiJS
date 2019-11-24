const request = require('./esiJS-Utils/request')
const inputValidation = require('./esiJS-Utils/inputValidation')

module.exports = {
    ancestries: {
        /**
         * Get all character ancestries.
         * @async
         * @returns {array}
         */
        ancestries () {
            return request({ subUrl: `universe/ancestries` })
        }
    },
    belts: {
        /**
         * Get information on an asteroid belt.
         * @async
         * @param {number} beltId 
         * @returns {object}
         */
        beltInfo (beltId) {
            inputValidation({ input: beltId, type: 'number', message: `The function 'universe.belts.beltInfo requires a belt Id!` })

            return request({ subUrl: `universe/asteroid_belts/${beltID}` })
        }
    },
    bloodlines: {
        /**
         * Get a list of bloodlines.
         * @async
         * @returns {object}
         */
        bloodlines () {
            return request({ subUrl: `universe/bloodlines` })
        },
    },
    bulk: {
        /**
         * Resolve a set of IDs to names and categories. 
         * Supported ID’s for resolving are: 
         * Characters, Corporations, Alliances, Stations, Solar Systems, Constellations, Regions, Types, Factions
         * @async
         * @param {[number]} IDs 
         * @returns {array}
         */
        idsToNames (IDs) {
            inputValidation({ input: IDs, type: 'object', message: `The function 'universe.bulk.idsToNames requires IDs to be an array!` })

            return request({ subUrl: `universe/names`, post: true, body: IDs })
        },
        /**
         * Resolve a set of names to IDs in the following categories: 
         * agents, alliances, characters, constellations, corporations factions, inventory_types, regions, stations, and systems. 
         * Only exact matches will be returned. All names searched for are cached for 12 hours.
         * @async
         * @param {[string]} names 
         * @returns {array}
         */
        namesToIds (names) {
            inputValidation({ input: names, type: 'object', message: `The function 'universe.bulk.namesToIds requires names to be an array!` })

            return request({ subUrl: `universe/ids`, post: true, body: names })
        }
    },
    categories: {
        /**
         * Get a list of item categories.
         * @async
         * @returns {[number]}
         */
        categories () {
            return request({ subUrl: `universe/categories` })
        },
        /**
         * Get information on an item category.
         * @async
         * @param {number} categoryID 
         * @returns {object}
         */
        categoryInfo (categoryID) {
            inputValidation({ input: categoryID, type: 'number', message: `The function 'universe.categories.categoryInfo requires a category Id!` })
            
            return request({ subUrl: `universe/categories/${categoryID}` })
        }
    },
    constellations: {
        /**
         * Get information on a constellation.
         * @async
         * @async
         * @param {number} constellationID 
         * @returns {object}
         */
        constellationInfo (constellationID) {
            inputValidation({ input: constellationID, type: 'number', message: `The function 'universe.constellations.constellationInfo requires a constellation Id!` })
            
            return request({ subUrl: `universe/constellations/${constellationID}` })
        },
        /**
         * Get a list of constellations.
         * @async
         * @returns {[number]}
         */
        constellations () {
            return request({ subUrl: `universe/constellations` })
        }
    },
    factions: {
        /**
         * Get a list of factions.
         * @async
         * @returns {object}
         */
        factions () {
            return request({ subUrl: `universe/factions` })
        }
    },
    graphics: {
        /**
         * Get information on a graphic.
         * @async
         * @param {number} graphicID 
         * @returns {object}
         */
        graphicInfo (graphicID) {
            inputValidation({ input: graphicID, type: 'number', message: `The function 'universe.graphics.graphicInfo requires a graphic Id!` })
            
            return request({ subUrl: `universe/graphics/${graphicID}` })
        },
        /**
         * Get a list of graphics.
         * @async
         * @returns {[number]}
         */
        graphics () {
            return request({ subUrl: `universe/graphics` })
        }
    },
    groups: {
        /**
         * Get information on an item group.
         * @async
         * @param {number} groupID
         * @returns {object} 
         */
        groupInfo (groupID) {
            inputValidation({ input: groupID, type: 'number', message: `The function 'universe.graphics.graphicInfo requires a group Id!` })
            
            return request({ subUrl: `universe/groups/${groupID}` })
        },
        /**
         * Get a list of item groups.
         * @async
         * @returns {[number]}
         */
        groups () {
            return request({ subUrl: `universe/groups` })
        }
    },
    moons: {
        /**
         * Get information on a moon.
         * @async
         * @async
         * @param {number} moonID 
         * @returns {object}
         */
        moonsInfo (moonID) {
            inputValidation({ input: moonID, type: 'number', message: `The function 'universe.moons.moonsInfo requires a moon Id!` })
            
            return request({ subUrl: `universe/moons/${moonID}` })
        }
    },
    planets: {
        /**
         * Get information on a planet.
         * @async
         * @param {number} planetID 
         * @returns {object}
         */
        planetInfo (planetID) {
            inputValidation({ input: planetID, type: 'number', message: `The function 'universe.planets.planetInfo requires a planet Id!` })
            
            return request({ subUrl: `universe/planets/${planetID}` })
        }
    },
    races: {
        /**
         * Get a list of character races.
         * @async
         * @returns {object}
         */
        races () {
            return request({ subUrl: `universe/races` })
        }
    },
    regions: {
        /**
         * Get information on a region.
         * @async
         * @async
         * @param {number} regionID 
         * @returns {objectt}
         */
        regionInfo (regionID) {
            inputValidation({ input: regionID, type: 'number', message: `The function 'universe.regions.regionInfo requires a region Id!` })
            
            return request({ subUrl: `universe/regions/${regionID}` })
        },
        /**
         * Get a list of regions.
         * @async
         * @returns {[number]}
         */
        regions () {
            return request({ subUrl: `universe/regions` })
        }
    },
    stargates: {
        /**
         * Get information on a stargate.
         * @async
         * @param {number} stargateID 
         * @returns {object}
         */
        stargateInfo (stargateID) {
            inputValidation({ input: stargateID, type: 'number', message: `The function 'universe.stargates.stargateInfo requires a stargate Id!` })
            
            return request({ subUrl: `universe/stargates/${stargateID}` })
        }
    },
    stars: {
        /**
         * Get information on a star.
         * @async
         * @param {number} starID 
         * @returns {object}
         */
        starInfo (starID) {
            inputValidation({ input: starID, type: 'number', message: `The function 'universe.stars.starInfo requires a star Id!` })
             
            return request({ subUrl: `universe/stars/${starID}` })
        }
    },
    stations: {
        /**
         * Get information on a station.
         * @async
         * @async
         * @param {number} stationID 
         * @returns {object}
         */
        stationInfo (stationID) {
            inputValidation({ input: stationID, type: 'number', message: `The function 'universe.stations.stationInfo requires a station Id!` })
             
            return request({ subUrl: `universe/stations/${stationID}` })
        }
    },
    structures: {
        /**
         * List all public structures.
         * @async
         * @returns {[number]}
         */
        structures () {
            return request({ subUrl: `universe/structures` })
        }
    },
    systems: {
        /**
         * Get information on a solar system.
         * @async
         * @param {number} systemID 
         * @returns {object}
         */
        systemInfo (systemID) {
            inputValidation({ input: systemID, type: 'number', message: `The function 'universe.systems.systemInfo' requires a system Id!` })
             
            return request({ subUrl: `universe/systems/${systemID}` })
        },
        /**
         * Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last-Modified header, 
         * excluding wormhole space. Only systems with jumps will be listed.
         * @async
         * @returns {object}
         */
        systemJumps () {
            return request({ subUrl: `universe/systems/system_jumps` })
        },
        /**
         * Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last-Modified header, 
         * excluding wormhole space. Only systems with kills will be listed.
         * @async
         * @returns {object}
         */
        systemKills () {
            return request({ subUrl: `universe/systems/system_kills` })
        },
        /**
         * Get a list of solar systems.
         * @async
         * @returns {[number]}
         */
        systems () {
            return request({ subUrl: `universe/systems` })
        }
    },
    types: {
        /**
         * Get information on a type.
         * @async
         * @param {number} typeID 
         * @returns {object}
         */
        typeInfo (typeID) {
            inputValidation({ input: typeID, type: 'number', message: `The function 'universe.types.typeInfo requires a type Id!` })
            
            return request({ subUrl: `universe/types/${typeID}` })
        },
        /**
         * Get a list of type ids.
         * @async
         * @returns {[number]}
         */
        types () {
            return request({ subUrl: `universe/types` })
        }
    },
}
