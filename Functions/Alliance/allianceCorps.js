module.exports = corps

let axios = require('axios')
let { link } = require('../../esi.json')
async function corps(ID) {
    let returningData;

    if (!ID) {
        console.error(`the function 'corps' requires a alliance ID!`)
        return
    }

    await axios.get(`${link}alliances/${ID}/corporations/?datasource=tranquility`)
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