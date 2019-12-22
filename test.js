let esiJS = require('./endpoints') 

esiJS.character.notifications(2115455534)
.then(r => {
    console.log(r)
})
.catch(e => {
    console.error(e)
})