const request = require('./esiJS-Utils/request')
const inputValidation = require('./esiJS-Utils/inputValidation')

module.exports = {
    /**
     *
     */
    ancestries: {
        /**
         * Get all character ancestries.

         * @returns {array}
         */
        ancestries() {
            return request({
                subUrl: `universe/ancestries`
            })
        }
    },
    /**
     *
     */
    belts: {
        /**
         * Get information on an asteroid belt.

         * @param {number} beltID
         * @returns {object}
         */
        beltInfo(beltID) {
            inputValidation({
                input: beltID,
                type: 'number',
                message: `The function 'universe.belts.beltInfo requires a belt ID!`
            })

            return request({
                subUrl: `universe/asteroid_belts/${beltID}`
            })
        }
    },
    /**
     *
     */
    bloodlines: {
        /**
         * Get a list of bloodlines.

         * @returns {object}
         */
        bloodlines() {
            return request({
                subUrl: `universe/bloodlines`
            })
        },
    },
    /**
     *
     */
    bulk: {
        /**
         * Resolve a set of IDs to names and categories.
         * Supported ID’s for resolving are:
         * Characters, Corporations, Alliances, Stations, Solar Systems, Constellations, Regions, Types, Factions

         * @param {[number]} IDs
         * @returns {array}
         */
        idsToNames(IDs) {
            inputValidation({
                input: IDs,
                type: 'object',
                message: `The function 'universe.bulk.idsToNames requires IDs to be an array!`
            })

            return request({
                subUrl: `universe/names`,
                requestType: 'post',
                body: IDs
            })
        },
        /**
         * Resolve a set of names to IDs in the following categories:
         * agents, alliances, characters, constellations, corporations factions, inventory_types, regions, stations, and systems.
         * Only exact matches will be returned. All names searched for are cached for 12 hours.

         * @param {[string]} names
         * @returns {array}
         */
        namesToIDs(names) {
            inputValidation({
                input: names,
                type: 'object',
                message: `The function 'universe.bulk.namesToIDs requires names to be an array!`
            })

            return request({
                subUrl: `universe/ids`,
                requestType: 'post',
                body: names
            })
        }
    },
    /**
     *
     */
    categories: {
        /**
         * Get a list of item categories.

         * @returns {[number]}
         */
        categories() {
            return request({
                subUrl: `universe/categories`
            })
        },
        /**
         * Get information on an item category.

         * @param {number} categoryID
         * @returns {object}
         */
        categoryInfo(categoryID) {
            inputValidation({
                input: categoryID,
                type: 'number',
                message: `The function 'universe.categories.categoryInfo requires a category ID!`
            })

            return request({
                subUrl: `universe/categories/${categoryID}`
            })
        }
    },
    /**
     *
     */
    constellations: {
        /**
         * Get information on a constellation.


         * @param {number} constellationID
         * @returns {object}
         */
        constellationInfo(constellationID) {
            inputValidation({
                input: constellationID,
                type: 'number',
                message: `The function 'universe.constellations.constellationInfo requires a constellation ID!`
            })

            return request({
                subUrl: `universe/constellations/${constellationID}`
            })
        },
        /**
         * Get a list of constellations.

         * @returns {[number]}
         */
        constellations() {
            return request({
                subUrl: `universe/constellations`
            })
        }
    },
    /**
     *
     */
    factions: {
        /**
         * Get a list of factions.

         * @returns {object}
         */
        factions() {
            return request({
                subUrl: `universe/factions`
            })
        }
    },
    /**
     *
     */
    graphics: {
        /**
         * Get information on a graphic.

         * @param {number} graphicID
         * @returns {object}
         */
        graphicInfo(graphicID) {
            inputValidation({
                input: graphicID,
                type: 'number',
                message: `The function 'universe.graphics.graphicInfo requires a graphic ID!`
            })

            return request({
                subUrl: `universe/graphics/${graphicID}`
            })
        },
        /**
         * Get a list of graphics.

         * @returns {[number]}
         */
        graphics() {
            return request({
                subUrl: `universe/graphics`
            })
        }
    },
    /**
     *
     */
    groups: {
        /**
         * Get information on an item group.

         * @param {number} groupID
         * @returns {object}
         */
        groupInfo(groupID) {
            inputValidation({
                input: groupID,
                type: 'number',
                message: `The function 'universe.graphics.graphicInfo requires a group ID!`
            })

            return request({
                subUrl: `universe/groups/${groupID}`
            })
        },
        /**
         * Get a list of item groups.

         * @returns {[number]}
         */
        groups() {
            return request({
                subUrl: `universe/groups`
            })
        }
    },
    /**
     *
     */
    moons: {
        /**
         * Get information on a moon.


         * @param {number} moonID
         * @returns {object}
         */
        moonsInfo(moonID) {
            inputValidation({
                input: moonID,
                type: 'number',
                message: `The function 'universe.moons.moonsInfo requires a moon ID!`
            })

            return request({
                subUrl: `universe/moons/${moonID}`
            })
        }
    },
    /**
     *
     */
    planets: {
        /**
         * Get information on a planet.

         * @param {number} planetID
         * @returns {object}
         */
        planetInfo(planetID) {
            inputValidation({
                input: planetID,
                type: 'number',
                message: `The function 'universe.planets.planetInfo requires a planet ID!`
            })

            return request({
                subUrl: `universe/planets/${planetID}`
            })
        }
    },
    /**
     *
     */
    races: {
        /**
         * Get a list of character races.

         * @returns {object}
         */
        races() {
            return request({
                subUrl: `universe/races`
            })
        }
    },
    /**
     *
     */
    regions: {
        /**
         * Get information on a region.


         * @param {number} regionID
         * @returns {objectt}
         */
        regionInfo(regionID) {
            inputValidation({
                input: regionID,
                type: 'number',
                message: `The function 'universe.regions.regionInfo requires a region ID!`
            })

            return request({
                subUrl: `universe/regions/${regionID}`
            })
        },
        /**
         * Get a list of regions.

         * @returns {[number]}
         */
        regions() {
            return request({
                subUrl: `universe/regions`
            })
        }
    },
    /**
     *
     */
    stargates: {
        /**
         * Get information on a stargate.

         * @param {number} stargateID
         * @returns {object}
         */
        stargateInfo(stargateID) {
            inputValidation({
                input: stargateID,
                type: 'number',
                message: `The function 'universe.stargates.stargateInfo requires a stargate ID!`
            })

            return request({
                subUrl: `universe/stargates/${stargateID}`
            })
        }
    },
    /**
     *
     */
    stars: {
        /**
         * Get information on a star.

         * @param {number} starID
         * @returns {object}
         */
        starInfo(starID) {
            inputValidation({
                input: starID,
                type: 'number',
                message: `The function 'universe.stars.starInfo requires a star ID!`
            })

            return request({
                subUrl: `universe/stars/${starID}`
            })
        }
    },
    /**
     *
     */
    stations: {
        /**
         * Get information on a station.


         * @param {number} stationID
         * @returns {object}
         */
        stationInfo(stationID) {
            inputValidation({
                input: stationID,
                type: 'number',
                message: `The function 'universe.stations.stationInfo requires a station ID!`
            })

            return request({
                subUrl: `universe/stations/${stationID}`
            })
        }
    },
    /**
     *
     */
    structures: {
        /**
         * List all public structures.

         * @returns {[number]}
         */
        structures() {
            return request({
                subUrl: `universe/structures`
            })
        },
        /**
         * Get structure information.
         * @param {number} structureID
         * @requires esi-universe.read_structures.v1
         * @returns information on requested structure if you are on the ACL. Otherwise, returns “Forbidden” for all inputs.
         */
        structureInfo(structureID) {
            inputValidation({
                input: structureID,
                type: 'number',
                message: `The function 'universe.structures.structureInfo' needs a structure ID!`
            })

            return request({
                subUrl: `universe/structures/${structureID}`,
                needsAuth: true
            })
        }
    },
    /**
     *
     */
    systems: {
        /**
         * Get information on a solar system.

         * @param {number} systemID
         * @returns {object}
         */
        systemInfo(systemID) {
            inputValidation({
                input: systemID,
                type: 'number',
                message: `The function 'universe.systems.systemInfo' requires a system ID!`
            })

            return request({
                subUrl: `universe/systems/${systemID}`
            })
        },
        /**
         * Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last-Modified header,
         * excluding wormhole space. Only systems with jumps will be listed.

         * @returns {object}
         */
        systemJumps() {
            return request({
                subUrl: `universe/system_jumps`
            })
        },
        /**
         * Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last-Modified header,
         * excluding wormhole space. Only systems with kills will be listed.

         * @returns {object}
         */
        systemKills() {
            return request({
                subUrl: `universe/system_kills`
            })
        },
        /**
         * Get a list of solar systems.

         * @returns {[number]}
         */
        systems() {
            return request({
                subUrl: `universe/systems`
            })
        }
    },
    /**
     *
     */
    types: {
        /**
         * Get information on a type.

         * @param {number} typeID
         * @returns {object}
         */
        typeInfo(typeID) {
            inputValidation({
                input: typeID,
                type: 'number',
                message: `The function 'universe.types.typeInfo requires a type ID!`
            })

            return request({
                subUrl: `universe/types/${typeID}`
            })
        },
        /**
         * Get a list of type ids.

         * @returns {[number]}
         */
        types() {
            return request({
                subUrl: `universe/types`
            })
        }
    },
}