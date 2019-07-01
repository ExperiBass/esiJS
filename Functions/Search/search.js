module.exports = search

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
        return Error(`Second argument must be a string and contail one of these categories: ${categories}`)
    }
   /* if (typeof category) {
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
                console.error(`The second argument must be of one of the following categories: ${categories}`)
                return;
        }
    }*/
    if (typeof strict !== 'boolean') {
        console.error(`The third parameter must be a boolean value!`)
        return Error('Third argument must be a boolean value')
    } 

 await axios.get(`${link}search/?categories=${category}&datasource=tranquility&language=en-us&search=${search}&strict=${strict}`)
        .then(response => {
            if (response.statusText != 'OK') {
                console.error(response.error)
                return true
            }
            data = response.data
      //      console.log(data, 'line 68')
        }).catch(function (error) {
            // handle error
            console.log(error);
          })
        
        returningData = Promise.resolve(data)
      //  console.log(data, 'line 73')
    return returningData;
}

// testing/debugging

console.log(a())
async function a() {
    let info = await search('tritanium', 'inventory_type', true)
    console.log(info)
}