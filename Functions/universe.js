const request = require('./Utility/request')
const inputValidation = require('./Utility/inputValidation')

module.exports = {
    ancestries: {
        ancestries () {
            return request({ subUrl: `universe/ancestries` })
        }
    },
    belts: {
        beltInfo (beltId) {
            inputValidation({ input: beltId, type: 'number', message: `The function 'universe.belts.beltInfo requires a belt Id!` })

            return request({ subUrl: `universe/asteroid_belts/${beltID}` })
        }
    },
    bloodlines: {
        bloodlines () {
            return request({ subUrl: `universe/bloodlines` })
        },
    },
    bulk: {
        idsToNames (IDs) {
            inputValidation({ input: IDs, type: 'object', message: `The function 'universe.bulk.idsToNames requires IDs to be an array!` })

            return request({ subUrl: `universe/names`, post: true, body: IDs })
        },
        namesToIds (names) {
            inputValidation({ input: names, type: 'object', message: `The function 'universe.bulk.namesToIds requires names to be an array!` })

            return request({ subUrl: `universe/ids`, post: true, body: names })
        }
    },
    categories: {
        categories () {
            return request({ subUrl: `universe/categories` })
        },
        categoryInfo (categoryID) {
            inputValidation({ input: categoryID, type: 'number', message: `The function 'universe.categories.categoryInfo requires a category Id!` })
            
            return request({ subUrl: `universe/categories/${categoryID}` })
        }
    },
    constellations: {
        constellationInfo (constellationID) {
            inputValidation({ input: categoryID, type: 'number', message: `The function 'universe.constellations.constellationInfo requires a constellation Id!` })
            
            return request({ subUrl: `universe/constellations/${constellationID}` })
        },
        constellations (categoryID) {
            return request({ subUrl: `universe/constellations` })
        }
    },
    factions: {
        factions () {
            return request({ subUrl: `universe/factions` })
        }
    },
    graphics: {
        graphicInfo (graphicID) {
            inputValidation({ input: graphicID, type: 'number', message: `The function 'universe.graphics.graphicInfo requires a graphic Id!` })
            
            return request({ subUrl: `universe/graphics/${graphicID}` })
        },
        graphics () {
            return request({ subUrl: `universe/graphics` })
        }
    },
    groups: {
        groupInfo (groupID) {
            inputValidation({ input: groupID, type: 'number', message: `The function 'universe.graphics.graphicInfo requires a group Id!` })
            
            return request({ subUrl: `universe/groups/${groupID}` })
        },
        groups () {
            return request({ subUrl: `universe/groups` })
        }
    },
    moons: {
        moonsInfo (moonID) {
            inputValidation({ input: moonID, type: 'number', message: `The function 'universe.moons.moonsInfo requires a moon Id!` })
            
            return request({ subUrl: `universe/moons/${moonID}` })
        }
    },
    planets: {
        planetInfo (planetID) {
            inputValidation({ input: planetID, type: 'number', message: `The function 'universe.planets.planetInfo requires a planet Id!` })
            
            return request({ subUrl: `universe/planets/${planetID}` })
        }
    },
    races: {
        races () {
            return request({ subUrl: `universe/races` })
        }
    },
    regions: {
        regionInfo (regionID) {
            inputValidation({ input: regionID, type: 'number', message: `The function 'universe.regions.regionInfo requires a region Id!` })
            
            return request({ subUrl: `universe/regions/${regionID}` })
        },
        regions () {
            return request({ subUrl: `universe/regions` })
        }
    },
    stargates: {
        stargateInfo (stargateID) {
            inputValidation({ input: stargateID, type: 'number', message: `The function 'universe.stargates.stargateInfo requires a stargate Id!` })
            
            return request({ subUrl: `universe/stargates/${stargateID}` })
        }
    },
    stars: {
        startInfo (startID) {
            inputValidation({ input: startID, type: 'number', message: `The function 'universe.stars.starInfo requires a star Id!` })
             
            return request({ subUrl: `universe/stars/${startID}` })
        }
    },
    stations: {
        stationInfo (stationID) {
            inputValidation({ input: stationID, type: 'number', message: `The function 'universe.stations.stationInfo requires a station Id!` })
             
            return request({ subUrl: `universe/stations/${stationID}` })
        }
    },
    structures: {
        structures () {
            return request({ subUrl: `universe/structures` })
        }
    },
    systems: {
        systemInfo (systemID) {
            inputValidation({ input: systemID, type: 'number', message: `The function 'universe.systems.systemInfo' requires a system Id!` })
             
            return request({ subUrl: `universe/systems/${systemID}` })
        },
        systemJumps () {
            return request({ subUrl: `universe/systems/system_jumps` })
        },
        systemKills () {
            return request({ subUrl: `universe/systems/system_kills` })
        },
        systems () {
            return request({ subUrl: `universe/systems` })
        }
    },
    types: {
        typeInfo (typeID) {
            inputValidation({ input: typeID, type: 'number', message: `The function 'universe.types.typeInfo requires a type Id!` })
            
            return request({ subUrl: `universe/types/${typeID}` })
        },
        types () {
            return request({ subUrl: `universe/types` })
        }
    },
}
