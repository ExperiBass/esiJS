module.exports = {

    test: require('./Functions/Test'),
    search: require('./Functions/Search/search'),
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
    }
}