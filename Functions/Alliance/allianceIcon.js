module.exports = icon

let axios = require('axios')
let { link } = require('../../esi.json')
async function icon(ID) {
    let returningData;

    if (!ID) {
        console.error(`the function 'icon' requires a alliance ID!`)
        return 'icon requires alliance ID'
    }

    await axios.get(`${link}alliances/${ID}/icons/?datasource=tranquility`)
        .then(response => {
            if (response.statusText != 'OK') {
                console.error(response.error)
                return true
            }
            returningData = Promise.resolve(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
          })

    return returningData;
}