let esiJS = require('./endpoints') 

esiJS.character.notifications(2113784355)
.then(r => {
    console.log(r)
})
.catch(e => {
    console.error(e)
})