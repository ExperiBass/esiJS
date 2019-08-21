module.exports = {
    util: {
        setSettings: require('./Functions/Utility/setSettings'),
        getSettings: require('./Functions/Utility/getSettings'),
        sleep: require('./Functions/Utility/sleep'),
        addArrays: require('./Functions/Utility/addArrays')
    }, 
    alliance: require('./Functions/alliances'),
    character: require('./Functions/chacter'),
    contracts: require('./Functions/contracts'),
    corporation: require('./Functions/corporation'),
    dogma: require('./Functions/dogma'),
    fw: require('./Functions/factionWarfare'),
    incursions: require('./Functions/incursions'),
    industry: require('./Functions/industry'),
    insurance: require('./Functions/insurance'),
    killmails: require('./Functions/killMails'),
    loyalty: require('./Functions/loyalty'),
    market: require('./Functions/market'),
    opportunities: require('./Functions/opportunities'),
    pi: require('./Functions/planetaryInteraction'),
    routes: require('./Functions/routes'),
    search: require('./Functions/search'),
    sov: require('./Functions/sovereignty'),
    status: require('./Functions/status'),
    universe: require('./Functions/universe'),
    wars: require('./Functions/wars')
}
