module.exports = info

let axios = require('axios')
let { link } = require('../../esi.json')

async function info(corpID) {
    let returningData;
    if (!corpID) {
        console.error(`The function 'info' needs a corporation ID!`)
        return 'info needs a corporation ID'
    }

    await axios.get(`${link}/corporations/${corpID}/?datasource=tranquility`)
        .then(response => {
            if (response.statusText != 'OK') {
                console.error(response.error)
                return true
            }
            returningData = Promise.resolve(response.data)
        })
        .catch(function(e) {
            console.error(e.response.data.error)
            return e.response.data.error
        })
    return returningData;
}

async function a() {
   let test = await info(98604629)
   console.log(test)
}
console.log(a())