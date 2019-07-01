module.exports = characters

const axios = require('axios')
const { link } = require('../../esi.json')

async function characters() {
let returningData;

    await axios.get(`${link}fw/leaderboards/characters/?datasource=tranquility`)
        .then(response => {
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            let error = e.response.data.error
            console.error(`From ESI:`,error)
            return Error(error)
        })

        return returningData;
}