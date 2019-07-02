module.exports = {
    
    settings: {
        setSettings: require('./Functions/Settings/setSettings'),
        getSettings: require('./FUnctions/Settings/getSettings')
    }, 
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
        attrs: require('./Functions/Dogma/attributes'),
        attrInfo: require('./Functions/Dogma/attributeInfo'),
        dynItemInfo: require('./Functions/Dogma/DynamicItemInfo'),
        effectInfo: require('./Functions/Dogma/effectInfo'),
        effects: require('./Functions/Dogma/effects')
    },
    fw: {
       leaderboards: {
           chars: require('./Functions/Faction Warfare/leaderboards/characters'),
           corps: require('./Functions/Faction Warfare/leaderboards/corporations'),
           leaderboards: require('./Functions/Faction Warfare/leaderboards/leaderboards')
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

    },
    universe: {

    },
    wars: {
        
    }
}