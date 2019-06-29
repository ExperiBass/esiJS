module.exports = {

    test: require('./Functions/Test'),
    
    alliance: {
        corps: require('./Functions/Alliance/allianceCorps'),
        icon: require('./Functions/Alliance/allianceIcon'),
        info: require('./Functions/Alliance/allianceInfo'),
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
        icons: require('./Functions/Corporation/icons'),
        info: require('./Functions/Corporation/info'),
        npcCorps: require('./Functions/Corporation/npcCorps')
    },
    dogma: {
        
    },
    factionWarfare: {

    },
    incursions: {

    },
    industry: {

    },
    insurance: {

    },
    killmails: {

    },
    loyalty: {

    },
    market: {

    },
    opportunities: {

    },
    planetaryInteraction: {

    },
    routes: {

    },
    search: {
        search: require('./Functions/Search/search')
    },
    sovereignity: {

    },
    status: {

    },
    universe: {

    },
    wars: {
        
    }
}