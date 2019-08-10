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
            try {
                inputValidation({ input: beltId, type: 'number', message: `The function 'universe.belts.beltInfo requires a belt Id!` })
            } catch (error) {
                throw Error(error)
            }
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
            try {
                inputValidation({ input: IDs, type: 'object', message: `The function 'universe.bulk.idsToNames requires IDs to be an array!` })
            } catch (error) {
                throw Error(error)
            }

            return request({ subUrl: `universe/names`, post: true, body: IDs })
        },
        namesToIds (names) {
            try {
                inputValidation({ input: names, type: 'object', message: `The function 'universe.bulk.namesToIds requires names to be an array!` })
            } catch (error) {
                throw Error(error)
            }

            return request({ subUrl: `universe/ids`, post: true, body: names })
        }
    },
    categories: {
        categories () {
            return request({ subUrl: `universe/categories` })
        },
        categoryInfo (categoryID) {
            try {
                inputValidation({ input: categoryID, type: 'number', message: `The function 'universe.categories.categoryInfo requires a category Id!` })
            } catch (error) {
                throw Error(error)
            }
            
            return request({ subUrl: `universe/categories/${categoryID}` })
        }
    },
    constellations: {
        constellationInfo (constellationID) {
            try {
                inputValidation({ input: categoryID, type: 'number', message: `The function 'universe.constellations.constellationInfo requires a constellation Id!` })
            } catch (error) {
                throw Error(error)
            }
            
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
            try {
                inputValidation({ input: graphicID, type: 'number', message: `The function 'universe.graphics.graphicInfo requires a graphic Id!` })
            } catch (error) {
                throw Error(error)
            }
            
            return request({ subUrl: `universe/graphics/${graphicID}` })
        },
        graphics () {
            return request({ subUrl: `universe/graphics` })
        }
    },
    groups: {
        groupInfo (groupID) {
            try {
                inputValidation({ input: groupID, type: 'number', message: `The function 'universe.graphics.graphicInfo requires a group Id!` })
            } catch (error) {
                throw Error(error)
            }
            
            return request({ subUrl: `universe/groups/${groupID}` })
        },
        groups () {
            return request({ subUrl: `universe/groups` })
        }
    },
    moons: {
        moonsInfo (moonID) {
            try {
                inputValidation({ input: moonID, type: 'number', message: `The function 'universe.moons.moonsInfo requires a moon Id!` })
            } catch (error) {
                throw Error(error)
            }
            
            return request({ subUrl: `universe/moons/${moonID}` })
        }
    },
    planets: {
        planetInfo (planetID) {
            try {
                inputValidation({ input: planetID, type: 'number', message: `The function 'universe.planets.planetInfo requires a planet Id!` })
            } catch (error) {
                throw Error(error)
            }
            
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
            try {
                inputValidation({ input: regionID, type: 'number', message: `The function 'universe.regions.regionInfo requires a region Id!` })
            } catch (error) {
                throw Error(error)
            }
            
            return request({ subUrl: `universe/regions/${regionID}` })
        },
        regions () {
            return request({ subUrl: `universe/regions` })
        }
    },
    stargates: {
        stargateInfo (stargateID) {
            try {
                inputValidation({ input: stargateID, type: 'number', message: `The function 'universe.stargates.stargateInfo requires a stargate Id!` })
            } catch (error) {
                throw Error(error)
            }
            
            return request({ subUrl: `universe/stargates/${stargateID}` })
        }
    },
    stars: {
        startInfo (startID) {
            try {
                inputValidation({ input: startID, type: 'number', message: `The function 'universe.stars.starInfo requires a star Id!` })
            } catch (error) {
                throw Error(error)
            }
             
            return request({ subUrl: `universe/stars/${startID}` })
        }
    },
    stations: {
        stationInfo (stationID) {
            try {
                inputValidation({ input: stationID, type: 'number', message: `The function 'universe.stations.stationInfo requires a station Id!` })
            } catch (error) {
                throw Error(error)
            }
             
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
            try {
                inputValidation({ input: systemID, type: 'number', message: `The function 'universe.systems.systemInfo' requires a system Id!` })
            } catch (error) {
                throw Error(error)
            }
             
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
            try {
                inputValidation({ input: typeID, type: 'number', message: `The function 'universe.types.typeInfo requires a type Id!` })
            } catch (error) {
                throw Error(error)
            }
            
            return request({ subUrl: `universe/types/${typeID}` })
        },
        types () {
            return request({ subUrl: `universe/types` })
        }
    },
}
