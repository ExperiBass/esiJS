let esiJS = require('./endpoints') 

esiJS.character.info(2113784355)
.then(r => {
    console.log(r)
})
.catch(e => {
    console.error(e)
})