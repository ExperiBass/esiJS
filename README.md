# esiJS

esiJS is a updated library for EVE Online, that's updated and simple to use!
It is still under development, 5 out of 20 categories are done!
Since i haven't bought anything from CCP, i can't use the authenication (afaik).


# USAGE:

```js
// Use all functions like this:
let a = await esiJS.group.function()
// functions MUST be 'await'ed, otherwise they wont work properly
// ALLIANCE:
esiJS.alliance.alliances() // returns a array of active alliances
esiJS.alliance.corps(allianceID) // returns a array of corporationd within a alliance
esiJS.alliance.icon(allianceID) // returns links to the alliance icon
esiJS.alliance.info(allianceID) // returns info on a alliance

// CHARACTER:
esiJS.character.affiliation(characterIDArray) // returns a array of corps and alliances a character has been in
esiJS.character.corpHistory(characterID) // returns a array of all the corporations the character has been in
esiJS.character.portrait(characterID) // returns links to the characters portrait
esiJS.character.publicInfo(characterID) // returns all public information about a character

// CONTRACTS (PUBLIC):
esiJS.contracts.public.contracts(regionID) // returns all active contracts in a region
esiJS.contracts.public.bids(contractID) // returns all bids on a auction contract
esiJS.contracts.public.items(contractID) // returns all items in a Item Exchange or Auction contract

// CORPORATION:
esiJS.corporation.npcCorps() // returns all NPC corporations
esiJS.corporation.info(corporationID) // returns the info of a corporation
esiJS.corporation.icons(corporationID) // returns links to the corporation icon
esiJS.corporation.allianceHistory(corporationID) // returns array of alliances this corporation has been in

// DOGMA:
esiJS.dogma.attrs() // returns all attributes in game
esiJS.dogma.attrInfo(attributeID) // returns info on a attribute
esiJS.dogma.dynItemInfo(itemID, typeID) // returns info on a dynamic item (eg. railgun with a mutaplasmid)
esiJS.dogma.effects() // returns all effects in game
esiJS.dogma.effectInfo(effectID) // returns info on a effect

// FACTION WARFARE:
esiJS.fw.stats() // returns statistics on factions in faction warfare
esiJS.fw.systems() // returns systems claimed by faction warfare
esiJS.fw.wars() // returns data on which NPC factions are at war

// FACTION WARFARE (LEADERBOARDS):
esiJS.fw.lbs.chars() // returns top pilots in faction warfare
esiJS.fw.lbs.corps() // returns top corps in faction warfare
esiJS.fw.lbs.leaderboard() // returns top 4 factions in faction warfare

// INCURSIONS:
esiJS.incursions.incursions() // returns all current incursions

// INDUSTRY:
esiJS.industry.facilities() // returns a array of industry facilities
esiJS.industry.systems() // returns cost indices for all systems

// INSURANCE: 
esiJS.insurance.prices() // returns available insurance levels for all ship types

// LOYALTY:
esiJS.loyalty.offers(corporationID) // returns a list of offers from a corporations loyalty store

// MARKET:
esiJS.market.history(regionID, typeID) // returns a history of prices for a item in a region
esiJS.market.orders(regionID, pageNumber, buyOrSellOrAll, typeID) // returns orders for a item in a region (itemID is optional)
                                                                  // buyOrSellOrAll defaults to 'all', possible values are
                                                                  // 'buy', 'sell', or 'all'
esiJS.market.prices() // returns average price and adjusted price of items
esiJS.market.types(regionID) // returns all item types that have orders in a region

// MARKET(GROUPS):
esiJS.market.groups.groups() // returns all market groups
esiJS.market.groups.groupInfo(marketGroupID) // returns info on a market group

// OPPORTUNITIES:
esiJS.opportunities.groups() // returns all opportunity groups
esiJS.opportunities.groupInfo(opportunityGroupID) // returns info on a opportunity group
esiJS.opportunities.tasks() // returns all opportunity tasks
esiJS.opportunities.taskInfo(opportunityTaskID) // returns info on a opportunity task

// PLANETARY INTERACTION:
esiJS.pi.schematicInfo(schematicID) // returns info on a planetaty factory schematic

// ROUTES:
esiJS.routes.planRoute(orginSystemID, destinationSystemID, flag, avoid) // returns route from orgin to destination
                                                                        // flag defaults to 'secure', possible values are
                                                                        // 'shortest', 'secure', and 'insecure'
                                                                        // avoid is a optional array of system IDs

// SEARCH:
esiJS.search.search(query, category, strict) // searches on a string
                                             // category can be one of the following: 
                                             // 'agent', 'alliance', 'character', 'constellation', 'corporation', 'faction',
                                             // 'inventory_type', 'region', 'solar_system', or 'station'

// SOVEREIGNTY:
esiJS.sov.campaigns() // returns all sovereignty campaigns
esiJS.sov.map() // returns sovereignty of all systems
esiJS.sov.structures() // returns sovereignty of structures

// STATUS:
esiJS.status.status() // returns status of the server chosen in the settings
// UNIVERSE:

// WARS:

// SETTINGS:
esiJS.settings.getSettings() // returns the current settings
esiJS.settings.setSettings(path, dataSource) // sets the route taken ('dev', 'latest', 'v1', or 'legacy', defaults to 'latest') and
                                             // the server to get the data from ('tranqulity', 'singularity', defaults to the former)
```