module.exports = search
/**
 * Search entities in EVE.
 * @exports search
 * @async
 * @param query {string} The string to search on.
 * @param category {string} The category of the entity. Will be one of these: 'agent', 'alliance', 'character', 'constellation', 'corporation', 'faction', 'inventory_type', 
                                'region', 'solar_system', 'station'
 * @param strict {boolean} Whether to do a strict or loose search. Defaults to false.
 * @returns The info on the searched entity.
 */
async function search(search, category, strict = false) {
    const axios = require('axios')
    const { link } = require('../../esi.json')

    let data;
    let returningData;
    let categories = [
                'agent',
                'alliance',
                'character',
                'constellation',
                'corporation',
                'faction',
                'inventory_type',
                'region',
                'solar_system',
                'station'
                ]
  
    if (typeof search !== 'string') {
        console.error(`The first argument MUST be a string!`)
        return
    }
    if (typeof category !== 'string' || !categories.includes(category)) {
        console.error(`The category must be a string and must be one of the following categories: ${categories}`)
        throw Error(`Second argument must be a string and one of these categories: ${categories}`)
    }
    if (typeof strict !== 'boolean') {
        console.error(`The third parameter must be a boolean value!`)
        throw Error('Third argument must be a boolean value')
    } 

    await axios.get(`${link}search/?categories=${category}&datasource=tranquility&language=en-us&search=${search}&strict=${strict}`)
        .then(response => {
            data = response.data
        })
        .catch(function (e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            throw Error(error)
        })
        
    returningData = Promise.resolve(data)
    return returningData;
}