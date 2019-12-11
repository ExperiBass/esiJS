let esiJS = require('./endpoints')


esiJS.status.status().then(e => {
    console.log(e)
})

