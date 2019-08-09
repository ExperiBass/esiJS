module.exports = {
    
    util: {
        setSettings: require('./Functions/Utility/setSettings'),
        getSettings: require('./Functions/Utility/getSettings'),
        sleep: require('./Functions/Utility/sleep'),
        addArrays: require('./Functions/Utility/addArrays')
    }, 
    alliance: {
        corps: require('./Functions/Alliance/corps'),
        icon: require('./Functions/Alliance/icon'),
        info: require('./Functions/Alliance/info'),
        alliances: require('./Functions/Alliance/Alliances')
    },
    character: {
        affiliation: require('./Functions/Character/affiliation'),
        corpHistory: require('./Functions/Character/corpHistory'),
        portrait: require('./Functions/Character/portrait'),
        publicInfo: require('./Functions/Character/publicInfo')
    },
    contracts: {
        public: {
            bids: require('./Functions/Contracts/Public/bids'),
            contracts: require('./Functions/Contracts/Public/contracts'),
            items: require('./Functions/Contracts/Public/items')
        }
    },
    corporation: {
        allianceHistory: require('./Functions/Corporation/allianceHistory'),
        icon: require('./Functions/Corporation/icon'),
        info: require('./Functions/Corporation/info'),
        npcCorps: require('./Functions/Corporation/npcCorps')
    },
    dogma: {
        attrs: require('./Functions/Dogma/attrs'),
        attrInfo: require('./Functions/Dogma/attrInfo'),
        dynamicItemInfo: require('./Functions/Dogma/dynamicItemInfo'),
        effectInfo: require('./Functions/Dogma/effectInfo'),
        effects: require('./Functions/Dogma/effects')
    },
    fw: {
       lbs: {
           chars: require('./Functions/Faction Warfare/leaderboards/chars'),
           corps: require('./Functions/Faction Warfare/leaderboards/corps'),
           leaderboard: require('./Functions/Faction Warfare/leaderboards/leaderboard')
       },
       stats: require('./Functions/Faction Warfare/stats'),
       systems: require('./Functions/Faction Warfare/systems'),
       wars: require('./Functions/Faction Warfare/wars')
    },
    incursions: {
        incursions: require('./Functions/Incursions/incursions')
    },
    industry: {
        facilities: require('./Functions/Industry/facilities'),
        systems: require('./Functions/Industry/systems')
    },
    insurance: {
        prices: require('./Functions/Insurance/prices')
    },
    killmails: {
        killmailInfo: require('./Functions/Killmails/killmailInfo')
    },
    loyalty: {
        offers: require('./Functions/Loyalty/offers')
    },
    market: {
        groups: {
            groupInfo: require('./Functions/Market/Groups/groupInfo'),
            groups: require('./Functions/Market/Groups/groups')
        },
        history: require('./Functions/Market/history'),
        orders: require('./Functions/Market/orders'),
        prices: require('./Functions/Market/prices'),
        types: require('./Functions/Market/types')
    },
    opportunities: {
        groupInfo: require('./Functions/Opportunities/groupInfo'),
        groups: require('./Functions/Opportunities/groups'),
        taskInfo: require('./Functions/Opportunities/taskInfo'),
        tasks: require('./Functions/Opportunities/tasks')
    },
    pi: {
        schematicInfo: require('./Functions/Planetary Interaction/schematicInfo')
    },
    routes: {
        planRoute: require('./Functions/Routes/planRoute')
    },
    search: {
        search: require('./Functions/Search/search')
    },
    sov: {
        campaigns: require('./Functions/Sovereignty/campaigns'),
        map: require('./Functions/Sovereignty/map'),
        structures: require('./Functions/Sovereignty/structures')
    },
    status: {
        status: require('./Functions/Status/status')
    },
    universe: {
        ancestries: {
            ancestries: require('./Functions/Universe/Ancestries/ancestries')
        },
        belts: {
            beltInfo: require('./Functions/Universe/Belts/beltInfo')
        },
        bloodlines: {
            bloodlines: require('./Functions/Universe/Bloodlines/bloodlines')
        },
        bulk: {
            idsToNames: require('./Functions/Universe/Bulk/idsToNames'),
            namesToIds: require('./Functions/Universe/Bulk/namesToIds')
        },
        categories: {
           categories: require('./Functions/Universe/Categories/categories'),
           categoryInfo: require('./Functions/Universe/Categories/categoryInfo')
        },
        constellations: {
            constellation: require('./Functions/Universe/Constellations/constellations'),
            constellationInfo: require('./Functions/Universe/Constellations/constellationInfo') 
        },
        factions: {
            factions: require('./Functions/Universe/Factions/factions')
        },
        graphics: {
           graphics: require('./Functions/Universe/Graphics/graphics'),
           graphicINfo: require('./Functions/Universe/Graphics/graphicInfo') 
        },
        groups: {
            groups: require('./Functions/Universe/Groups/groups'),
            groupInfo: require('./Functions/Universe/Groups/groupInfo')
        },
        moons: {
            moonInfo: require('./Functions/Universe/Moons/moonInfo')
        },
        planets: {
            planetInfo: require('./Functions/Universe/Planets/planetInfo')
        },
        races: {
            races: require('./Functions/Universe/Races/races')
        },
        regions: {
           regions: require('./Functions/Universe/Regions/regions'),
           regionInfo: require('./Functions/Universe/Regions/regionInfo')
        },
        stargates: {
            stargateInfo: require('./Functions/Universe/Stargates/stargateInfo')
        },
        stars: {
            starInfo: require('./Functions/Universe/Stars/starInfo')
        },
        stations: {
            stationInfo: require('./Functions/Universe/Stations/stationInfo')
        },
        structures: {
            structures: require('./Functions/Universe/Structures/structures')
        },
        systems: {
            systems: require('./Functions/Universe/Systems/systems'),
            systemInfo: require('./Functions/Universe/Systems/systemInfo'),
            systemJumps: require('./Functions/Universe/Systems/systemJumps'),
            systemKills: require('./Functions/Universe/Systems/systemKills')
        },
        types: {
            types: require('./Functions/Universe/Types/types'),
            typeInfo: require('./Functions/Universe/Types/typeInfo')
        }
    },
    wars: {
        wars: require('./Functions/Wars/wars'),
        warInfo: require('./Functions/Wars/warInfo'),
        warKills: require('./Functions/Wars/warKills')
    }
}