# esiJS

esiJS is a updated library for EVE Online, that's updated and simple to use!
Since i haven't bought anything from CCP, i can't use the authenication (afaik).q

# INSTALLING:
```bash
npm i --save esijs
```

# USAGE:

```js
let esiJS = require('esiJS)
// Use all functions like this:
let a = await esiJS.group.function()
// functions MUST be 'await'ed, otherwise they wont work properly
// except `getSettings` and `setSettings`, those are synchronous functions

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

// KILLMAILS: 
esiJS.killmails.getkillMail(killmailID, killmailHash) // returns info on a killmail

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
esiJS.status.status() // returns status of the server set using 'setSettings()'

// UNIVERSE (ANCESTRIES):
esiJS.universe.ancestries.ancestries() // returns all character ancestries

// UNIVERSE (BELTS):
esiJS.universe.belts.beltInfo(beltID) // returns info on a asteriod belt

// UNIVERSE (BLOODLINES):
esiJS.universe.bloodlines.bloodlines() // returns all character bloodlines

// UNIVERSE (BULK):
esiJS.universe.bulk.idsToNames(array) // returns names of all ids in the array passed. supported IDs fall into these categories:
                                      // Characters, Corporations, Alliances, Stations, Solar Systems, Constellations, 
                                      // Regions, Types, and Factions 

esiJS.universe.bulk.namesToIds(array) // returns ids of all names passed that are a exact match in these categories:
                                      // agents, alliances, characters, constellations, corporations, factions, 
                                      // inventory_types, regions, stations, and systems

// UNIVERSE (CATEGORIES):
esiJS.universe.categories.categories() // returns all categories
esiJS.universe.categories.categoryInfo(categoryID) // returns info on a category

// UNIVERSE (CONSTELLATIONS):
esiJS.universe.constellations.constellations() // returns all constellations
esiJS.universe.constellations.constellationInfo(constellationID) // returns info on a constellation

// UNIVERSE (FACTIONS): 
esiJS.universe.factions.factions() // returns all factions

// UNIVERSE (GRAPHICS):
esiJS.universe.graphics.graphics() // returns all graphics
esiJS.universe.graphics.graphicInfo(graphicID) // returns info on a graphic

// UNIVERSE (GROUPS):
esiJS.universe.groups.groups() // returns all groups
esiJS.universe.groups.groupInfo(groupID) // returns info on a group

// UNIVERSE (MOONS):
esiJS.universe.moons.moonInfo(moonID) // returns info on a moon

// UNIVERSE (PLANETS):
esiJS.universe.planets.planetInfo(planetID) // returns info on a planet

// UNIVERSE (RACES):
esiJS.universe.races.races() // returns all character races

// UNIVERSE (REGIONS):
esiJS.universe.regions.regions() // returns all regions
esiJS.universe.regions.regionInfo(regionID) // returns info on a region

// UNIVERSE (STARGATES):
esiJS.universe.stargates.stargateInfo(stargateID) // returns info on a stargate

// UNIVERSE (STARS):
esiJS.universe.stars.starInfo(starID) // returns info on a star

// UNIVERSE (STATIONS):
esiJS.universe.stations.stationInfo(stationID) // returns info on a station

// UNIVERSE (STRUCTURES):
esiJS.universe.structures.structures() // returns all structures

// UNIVERSE (SYSTEMS):
esiJS.universe.systems.systems() // returns all systems
esiJS.universe.systems.systemInfo(systemID) // returns info on a system
esiJS.universe.systems.systemKills() // returns all system kills within the last hour, excluding wormhole space
esiJS.universe.systems.systemJumps() // returns the jumps into a system within the last hour

// UNIVERSE (TYPES):
esiJS.universe.types.types() // returns all types
esiJS.universe.types.typeInfo(typeID) // returns info on a type

// WARS:
esiJS.wars.wars() // returns a list of wars
esiJS.wars.warInfo(warID) // returns info on a war
esiJS.wars.warKills(warID) // returns all kills in a war

// UTILITY:
esiJS.util.getSettings() // returns the current settings
esiJS.util.setSettings(route, dataSource) // sets the route taken ('dev', 'latest', 'v1', or 'legacy', defaults to 'latest') and
                                             // the server to get the data from ('tranqulity', 'singularity', defaults to the former)
esiJS.util.sleep(mills) // pauses execution for the specified amount of time
```