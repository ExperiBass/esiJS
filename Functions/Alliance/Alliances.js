module.exports = alliances

let axios = require('axios')
let { link } = require('../../esi.json')

async function alliances() {
let returningData;

    await axios.get(`${link}alliances/?datasource=tranquility`)
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