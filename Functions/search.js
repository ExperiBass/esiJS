module.exports = search

function search(string, category, strict) {
    let axios = require('axios')
    let link = require('../esi.json').link
    let settings = require('../settings.json')
   // let data;
    let returningData;
    let types = [
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
  
    if (typeof string === 'number') {
        console.error(`The first argument MUST be a string!`)
        return
    }
    if (typeof category) {
        let s = category.toString().toLowerCase()
        switch(s) {
            case 'agent':
                break;
            case 'alliance':
                break;
            case 'character':
                break;
            case 'constellation':
                break;
            case 'corporation':
                break;
            case 'faction':
                break;
            case 'inventory_type':
                break;
            case 'region':
                break;
            case 'solar_system':
                break;
            case 'station':
                break;
            default:
                console.error(`The second argument must be of one of the following types: ${types}`)
                return;
        }
    }
    if (strict == undefined) {
        strict = false
    }
    if (typeof strict !== 'boolean') {
        console.error(`The third parameter must be a boolean value!`)
        return;
    } 

  let data = axios.get(`${link}search/?categories=${category}&datasource=tranquility&language=en-us&search=${string}&strict=${strict}`)
        .then(response => {
            if (response.statusText != 'OK') {
                console.error('ERROR: Invalid search string')
                return true
            }
            data = response.data
            //console.log(returningData)

        })
        
        returningData = Promise.resolve(data)
        console.log(data, 'line 73')
    return returningData;
}

console.log(a())
//console.log(search('tritanium', 'inventory_type', true))
function a() {
    let info = search('tritanium', 'inventory_type', true)
    console.log(info, 'line 80')
    //console.log(info.inventory_type, 'line 81')
}